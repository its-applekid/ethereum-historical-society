#!/usr/bin/env npx ts-node
/**
 * Fetch OG Images Script
 * 
 * Scans timeline events and fetches Open Graph images from their source URLs.
 * Outputs a mapping of event IDs to discovered image URLs.
 * 
 * Usage:
 *   npx ts-node scripts/fetch-og-images.ts
 *   npx ts-node scripts/fetch-og-images.ts --update  # Updates timeline.ts directly
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TIMELINE_PATH = path.join(__dirname, '../src/data/timeline.ts');

interface TimelineLink {
  label: string;
  url: string;
}

interface EventData {
  id: string;
  title: string;
  imageUrl?: string;
  sourceUrl?: string;
  links?: TimelineLink[];
}

// Extract OG image from HTML
function extractOgImage(html: string): string | null {
  // Try og:image first
  const ogMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
  if (ogMatch) return ogMatch[1];

  // Try twitter:image
  const twitterMatch = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']twitter:image["']/i);
  if (twitterMatch) return twitterMatch[1];

  return null;
}

// Fetch OG image from URL
async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; EthereumArchive/1.0)',
        'Accept': 'text/html',
      },
    });
    clearTimeout(timeout);

    if (!response.ok) return null;

    const html = await response.text();
    return extractOgImage(html);
  } catch (err) {
    return null;
  }
}

// Parse timeline.ts to extract events (simple regex approach)
function parseTimelineEvents(): EventData[] {
  const content = fs.readFileSync(TIMELINE_PATH, 'utf-8');
  const events: EventData[] = [];

  // Match event objects - simplified parsing
  const eventRegex = /\{\s*id:\s*['"]([^'"]+)['"]/g;
  let match;

  while ((match = eventRegex.exec(content)) !== null) {
    const id = match[1];
    const startIdx = match.index;
    
    // Find the closing brace for this event (count braces)
    let braceCount = 0;
    let endIdx = startIdx;
    let inString = false;
    let stringChar = '';
    
    for (let i = startIdx; i < content.length; i++) {
      const char = content[i];
      const prevChar = i > 0 ? content[i - 1] : '';
      
      if (!inString && (char === '"' || char === "'" || char === '`')) {
        inString = true;
        stringChar = char;
      } else if (inString && char === stringChar && prevChar !== '\\') {
        inString = false;
      } else if (!inString) {
        if (char === '{') braceCount++;
        else if (char === '}') {
          braceCount--;
          if (braceCount === 0) {
            endIdx = i + 1;
            break;
          }
        }
      }
    }

    const eventStr = content.slice(startIdx, endIdx);
    
    // Extract fields
    const titleMatch = eventStr.match(/title:\s*['"]([^'"]+)['"]/);
    const imageUrlMatch = eventStr.match(/imageUrl:\s*['"]([^'"]+)['"]/);
    const sourceUrlMatch = eventStr.match(/sourceUrl:\s*['"]([^'"]+)['"]/);
    
    // Extract links array
    const links: TimelineLink[] = [];
    const linksMatch = eventStr.match(/links:\s*\[([\s\S]*?)\]/);
    if (linksMatch) {
      const linkRegex = /\{\s*label:\s*['"]([^'"]+)['"],\s*url:\s*['"]([^'"]+)['"]\s*\}/g;
      let linkMatch;
      while ((linkMatch = linkRegex.exec(linksMatch[1])) !== null) {
        links.push({ label: linkMatch[1], url: linkMatch[2] });
      }
    }

    events.push({
      id,
      title: titleMatch ? titleMatch[1] : id,
      imageUrl: imageUrlMatch ? imageUrlMatch[1] : undefined,
      sourceUrl: sourceUrlMatch ? sourceUrlMatch[1] : undefined,
      links: links.length > 0 ? links : undefined,
    });
  }

  return events;
}

// Get all URLs to check for an event
function getUrlsToCheck(event: EventData): string[] {
  const urls: string[] = [];
  
  if (event.sourceUrl) urls.push(event.sourceUrl);
  if (event.links) {
    for (const link of event.links) {
      // Skip archive.org (unless it's a web archive), etherscan, github raw, etc.
      if (link.url.includes('archive.org') && !link.url.includes('/web/')) continue;
      if (link.url.includes('etherscan.io')) continue;
      if (link.url.includes('raw.githubusercontent')) continue;
      if (link.url.includes('github.com') && link.url.includes('/blob/')) continue;
      if (link.url.endsWith('.pdf')) continue;
      urls.push(link.url);
    }
  }
  
  return urls;
}

// Main
async function main() {
  const updateMode = process.argv.includes('--update');
  const events = parseTimelineEvents();
  
  console.log(`Found ${events.length} events in timeline.ts`);
  
  const eventsNeedingImages = events.filter(e => !e.imageUrl);
  console.log(`${eventsNeedingImages.length} events without images\n`);

  const results: Record<string, string> = {};
  let found = 0;
  let checked = 0;

  for (const event of eventsNeedingImages) {
    const urls = getUrlsToCheck(event);
    if (urls.length === 0) continue;

    process.stdout.write(`[${++checked}/${eventsNeedingImages.length}] ${event.id}... `);
    
    for (const url of urls) {
      const ogImage = await fetchOgImage(url);
      if (ogImage) {
        results[event.id] = ogImage;
        console.log(`✓ Found from ${new URL(url).hostname}`);
        found++;
        break;
      }
    }
    
    if (!results[event.id]) {
      console.log('✗ No OG image found');
    }
    
    // Small delay to be polite
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\n===== Results =====`);
  console.log(`Found OG images for ${found}/${eventsNeedingImages.length} events\n`);

  if (Object.keys(results).length > 0) {
    console.log('// Add these imageUrls to timeline.ts:\n');
    for (const [id, imageUrl] of Object.entries(results)) {
      console.log(`  // ${id}`);
      console.log(`  imageUrl: '${imageUrl}',\n`);
    }
  }

  if (updateMode && Object.keys(results).length > 0) {
    console.log('\n--update mode: Updating timeline.ts...');
    let content = fs.readFileSync(TIMELINE_PATH, 'utf-8');
    
    for (const [id, imageUrl] of Object.entries(results)) {
      // Find the event and add imageUrl after summary line
      const eventPattern = new RegExp(
        `(id:\\s*['"]${id}['"][^}]*?summary:\\s*['"][^'"]+['"],)`,
        's'
      );
      
      if (content.match(eventPattern)) {
        content = content.replace(eventPattern, `$1\n    imageUrl: '${imageUrl}',`);
        console.log(`  Updated: ${id}`);
      }
    }
    
    fs.writeFileSync(TIMELINE_PATH, content);
    console.log('\nDone! Run `npm run build` to rebuild.');
  }
}

main().catch(console.error);
