#!/usr/bin/env tsx
/**
 * Combine eth-prices.json and gas-history.json into block-context.json
 * This is the format consumed by DetailPanel.tsx
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ETH_PRICES_FILE = path.join(__dirname, '../../src/data/eth-prices.json')
const GAS_HISTORY_FILE = path.join(__dirname, '../../src/data/gas-history.json')
const OUTPUT_FILE = path.join(__dirname, '../../src/data/block-context.json')

interface BlockContext {
  blockNumber: number
  timestamp: number
  gasPrice: string // in gwei (formatted)
  ethPriceUsd: number
  typicalTxCostUsd: number
}

interface GasData {
  timestamp: number
  avgGasPrice: number
  baseFee?: number
}

function findClosestPrice(ethPrices: Record<string, number>, timestamp: number): number {
  const targetDate = new Date(timestamp * 1000).toISOString().split('T')[0]
  
  // Exact match
  if (ethPrices[targetDate]) {
    return ethPrices[targetDate]
  }
  
  // Find closest date within 7 days
  const target = new Date(targetDate).getTime()
  let closestDate = ''
  let minDiff = Infinity
  
  for (const date in ethPrices) {
    const diff = Math.abs(new Date(date).getTime() - target)
    if (diff < minDiff && diff < 7 * 24 * 60 * 60 * 1000) {
      minDiff = diff
      closestDate = date
    }
  }
  
  return closestDate ? ethPrices[closestDate] : 0
}

function calculateTxCost(gasPrice: number, ethPrice: number): number {
  // Simple ETH transfer = 21,000 gas
  const GAS_USED = 21000
  const ethCost = (gasPrice * GAS_USED) / 1e9 // gwei → ETH
  const usdCost = ethCost * ethPrice
  return Math.round(usdCost * 100) / 100 // round to 2 decimals
}

function main() {
  try {
    // Load data files
    const ethPricesRaw = fs.readFileSync(ETH_PRICES_FILE, 'utf-8')
    const ethPrices: Record<string, number> = JSON.parse(ethPricesRaw)
    
    const gasHistoryRaw = fs.readFileSync(GAS_HISTORY_FILE, 'utf-8')
    const gasHistory: Record<string, GasData> = JSON.parse(gasHistoryRaw)
    
    // Remove comment keys if present
    delete (ethPrices as any).comment
    delete (gasHistory as any).comment
    
    // Generate block context for each block in gas history
    const blockContexts: BlockContext[] = []
    
    for (const [blockStr, gasData] of Object.entries(gasHistory)) {
      const blockNumber = parseInt(blockStr, 10)
      if (isNaN(blockNumber)) continue // skip comment entries
      
      const ethPrice = findClosestPrice(ethPrices, gasData.timestamp)
      if (ethPrice === 0) {
        console.warn(`No ETH price found for block ${blockNumber}`)
        continue
      }
      
      const gasPrice = gasData.baseFee || gasData.avgGasPrice
      const typicalTxCostUsd = calculateTxCost(gasPrice, ethPrice)
      
      blockContexts.push({
        blockNumber,
        timestamp: gasData.timestamp,
        gasPrice: gasPrice.toFixed(1),
        ethPriceUsd: ethPrice,
        typicalTxCostUsd,
      })
    }
    
    // Sort by block number
    blockContexts.sort((a, b) => a.blockNumber - b.blockNumber)
    
    // Save to JSON
    fs.writeFileSync(
      OUTPUT_FILE,
      JSON.stringify(blockContexts, null, 2),
      'utf-8'
    )
    
    console.log(`✓ Generated ${blockContexts.length} block contexts`)
    console.log(`✓ Saved to ${OUTPUT_FILE}`)
    
    // Show sample
    console.log('\nSample contexts:')
    const samples = [1, 4370000, 12965000, 15537394, 19426587]
    for (const block of samples) {
      const ctx = blockContexts.find(c => c.blockNumber === block)
      if (ctx) {
        console.log(`  Block ${ctx.blockNumber}: ${ctx.gasPrice} gwei, ETH $${ctx.ethPriceUsd}, TX $${ctx.typicalTxCostUsd}`)
      }
    }
    
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()
