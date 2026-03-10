#!/usr/bin/env tsx
/**
 * Fetch historic ETH/USD prices from CoinGecko
 * Generates src/data/eth-prices.json
 * 
 * CoinGecko free API: 10-30 calls/minute
 * Docs: https://docs.coingecko.com/reference/introduction
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const COINGECKO_BASE = 'https://api.coingecko.com/api/v3'
const OUTPUT_FILE = path.join(__dirname, '../../src/data/eth-prices.json')

interface PriceData {
  timestamp: number // Unix timestamp
  date: string // YYYY-MM-DD
  price: number // USD
}

async function fetchHistoricPrices(): Promise<PriceData[]> {
  console.log('Fetching ETH historic prices from CoinGecko...')
  
  // CoinGecko market_chart endpoint returns daily prices
  // from: genesis (2015-07-30) to: today
  const from = Math.floor(new Date('2015-07-30').getTime() / 1000)
  const to = Math.floor(Date.now() / 1000)
  
  const url = `${COINGECKO_BASE}/coins/ethereum/market_chart/range?vs_currency=usd&from=${from}&to=${to}`
  
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`CoinGecko API error: ${response.status} ${response.statusText}`)
  }
  
  const data = await response.json()
  
  // data.prices is [[timestamp_ms, price], ...]
  const prices: PriceData[] = data.prices.map(([timestamp, price]: [number, number]) => ({
    timestamp: Math.floor(timestamp / 1000), // ms → seconds
    date: new Date(timestamp).toISOString().split('T')[0],
    price: Math.round(price * 100) / 100, // round to 2 decimals
  }))
  
  console.log(`✓ Fetched ${prices.length} daily price points`)
  return prices
}

function getPriceAtDate(prices: PriceData[], dateStr: string): number | null {
  const target = new Date(dateStr).getTime() / 1000
  
  // Find closest price by timestamp
  let closest = prices[0]
  let minDiff = Math.abs(closest.timestamp - target)
  
  for (const p of prices) {
    const diff = Math.abs(p.timestamp - target)
    if (diff < minDiff) {
      minDiff = diff
      closest = p
    }
  }
  
  // If closest is within 7 days, return it
  if (minDiff < 7 * 24 * 60 * 60) {
    return closest.price
  }
  
  return null
}

async function main() {
  try {
    const prices = await fetchHistoricPrices()
    
    // Convert to map: date → price for fast lookup
    const priceMap: Record<string, number> = {}
    for (const p of prices) {
      priceMap[p.date] = p.price
    }
    
    // Save to JSON
    fs.writeFileSync(
      OUTPUT_FILE,
      JSON.stringify(priceMap, null, 2),
      'utf-8'
    )
    
    console.log(`✓ Saved ${Object.keys(priceMap).length} prices to ${OUTPUT_FILE}`)
    
    // Test a few known dates
    console.log('\nSample prices:')
    console.log('  2015-07-30 (Genesis):', priceMap['2015-07-30'] || 'N/A')
    console.log('  2017-12-17 (CryptoKitties):', priceMap['2017-12-17'] || 'N/A')
    console.log('  2021-08-05 (London/EIP-1559):', priceMap['2021-08-05'] || 'N/A')
    console.log('  2022-09-15 (The Merge):', priceMap['2022-09-15'] || 'N/A')
    
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()
