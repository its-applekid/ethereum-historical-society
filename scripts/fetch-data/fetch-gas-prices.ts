#!/usr/bin/env tsx
/**
 * Fetch historic gas prices from Etherscan
 * Generates src/data/gas-history.json
 * 
 * Etherscan API key required (free tier: 5 calls/second, 100k calls/day)
 * Get key: https://etherscan.io/apis
 * Set env: ETHERSCAN_API_KEY=your_key
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const ETHERSCAN_BASE = 'https://api.etherscan.io/api'
const OUTPUT_FILE = path.join(__dirname, '../../src/data/gas-history.json')

interface GasData {
  blockNumber: number
  timestamp: number // Unix timestamp
  avgGasPrice: number // gwei
  baseFee?: number // gwei (post-London only)
}

/**
 * Fetch gas price for a specific block
 */
async function fetchGasAtBlock(blockNumber: number): Promise<GasData | null> {
  if (!ETHERSCAN_API_KEY) {
    throw new Error('ETHERSCAN_API_KEY env var required')
  }
  
  const url = `${ETHERSCAN_BASE}?module=proxy&action=eth_getBlockByNumber&tag=0x${blockNumber.toString(16)}&boolean=false&apikey=${ETHERSCAN_API_KEY}`
  
  const response = await fetch(url)
  if (!response.ok) {
    console.warn(`Failed to fetch block ${blockNumber}: ${response.status}`)
    return null
  }
  
  const data = await response.json()
  if (data.status === '0' || !data.result) {
    console.warn(`No result for block ${blockNumber}`)
    return null
  }
  
  const block = data.result
  
  // Parse gas price (hex → decimal → gwei)
  const gasPrice = block.transactions.length > 0
    ? calculateAverageGasPrice(block.transactions)
    : 0
  
  // Base fee (post-EIP-1559)
  const baseFee = block.baseFeePerGas
    ? parseInt(block.baseFeePerGas, 16) / 1e9
    : undefined
  
  return {
    blockNumber,
    timestamp: parseInt(block.timestamp, 16),
    avgGasPrice: Math.round(gasPrice * 10) / 10, // round to 1 decimal
    baseFee: baseFee ? Math.round(baseFee * 10) / 10 : undefined,
  }
}

function calculateAverageGasPrice(transactions: any[]): number {
  if (transactions.length === 0) return 0
  
  const gasPrices = transactions.map((tx: any) => {
    const price = parseInt(tx.gasPrice || '0', 16)
    return price / 1e9 // wei → gwei
  })
  
  const sum = gasPrices.reduce((a, b) => a + b, 0)
  return sum / gasPrices.length
}

/**
 * Fetch gas prices for key milestones
 * We'll sample blocks from major events in timeline.ts
 */
async function fetchKeyGasPrices(): Promise<GasData[]> {
  console.log('Fetching gas prices for key milestone blocks...')
  
  // Key blocks from timeline (mix of all eras)
  const keyBlocks = [
    1,          // Genesis block
    200000,     // Frontier Thawing
    1150000,    // Homestead
    1920000,    // DAO Fork
    4370000,    // Byzantium
    7280000,    // Constantinople
    9069000,    // Istanbul
    9200000,    // Muir Glacier
    12244000,   // Berlin
    12965000,   // London (EIP-1559 - first with base fee)
    13773000,   // Arrow Glacier
    15050000,   // Gray Glacier
    15537394,   // The Merge
    17034870,   // Shanghai
    19426587,   // Dencun
    // Sample some DeFi milestone blocks
    4605000,    // CryptoKitties congestion (~Nov 2017)
    10300000,   // DeFi Summer (~June 2020)
    12020000,   // Beeple NFT (~March 2021)
  ]
  
  const results: GasData[] = []
  
  for (const block of keyBlocks) {
    console.log(`  Fetching block ${block}...`)
    const data = await fetchGasAtBlock(block)
    if (data) {
      results.push(data)
    }
    // Rate limiting: 5 calls/sec on free tier
    await new Promise(resolve => setTimeout(resolve, 250))
  }
  
  console.log(`✓ Fetched gas data for ${results.length} blocks`)
  return results
}

async function main() {
  if (!ETHERSCAN_API_KEY) {
    console.error('❌ ETHERSCAN_API_KEY environment variable required')
    console.error('Get a free API key: https://etherscan.io/apis')
    console.error('Then run: ETHERSCAN_API_KEY=your_key npm run fetch-gas')
    process.exit(1)
  }
  
  try {
    const gasData = await fetchKeyGasPrices()
    
    // Convert to map: blockNumber → gas data
    const gasMap: Record<number, Omit<GasData, 'blockNumber'>> = {}
    for (const d of gasData) {
      gasMap[d.blockNumber] = {
        timestamp: d.timestamp,
        avgGasPrice: d.avgGasPrice,
        baseFee: d.baseFee,
      }
    }
    
    // Save to JSON
    fs.writeFileSync(
      OUTPUT_FILE,
      JSON.stringify(gasMap, null, 2),
      'utf-8'
    )
    
    console.log(`✓ Saved gas data to ${OUTPUT_FILE}`)
    
    // Show sample
    console.log('\nSample gas prices:')
    console.log('  Block 4370000 (Byzantium):', gasData.find(d => d.blockNumber === 4370000)?.avgGasPrice, 'gwei')
    console.log('  Block 12965000 (London):', gasData.find(d => d.blockNumber === 12965000)?.avgGasPrice, 'gwei')
    console.log('  Block 15537394 (The Merge):', gasData.find(d => d.blockNumber === 15537394)?.avgGasPrice, 'gwei')
    
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()
