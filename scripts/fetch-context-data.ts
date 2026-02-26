/**
 * Fetch historic gas prices and ETH prices for timeline events
 * 
 * This script fetches context data (gas prices, ETH/USD) for key blocks
 * to make timeline events more tangible and relatable.
 * 
 * Data sources:
 * - Etherscan API: Historic gas prices per block
 * - CoinGecko API: Historic ETH/USD prices by date
 * 
 * Setup:
 * 1. Get free Etherscan API key: https://etherscan.io/apis
 * 2. Set ETHERSCAN_API_KEY env var
 * 3. CoinGecko free tier needs no key
 * 
 * Usage: npm run fetch-context-data
 */

import fs from 'fs';
import path from 'path';

// Types
interface BlockContext {
  blockNumber: number;
  timestamp: number;
  gasPrice: string; // in gwei
  ethPriceUsd: number;
  typicalTxCostUsd: number; // 21000 gas * gasPrice * ethPrice
}

// Configuration
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '';
const DATA_DIR = path.join(__dirname, '../src/data');
const OUTPUT_FILE = path.join(DATA_DIR, 'block-context.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

/**
 * Fetch block details from Etherscan
 */
async function fetchBlockFromEtherscan(blockNumber: number): Promise<any> {
  const url = `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=0x${blockNumber.toString(16)}&boolean=false&apikey=${ETHERSCAN_API_KEY}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  if (data.error) {
    throw new Error(`Etherscan API error: ${data.error.message}`);
  }
  
  return data.result;
}

/**
 * Fetch ETH price from CoinGecko for a specific date
 */
async function fetchEthPriceForDate(date: Date): Promise<number> {
  // Format: dd-mm-yyyy
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  
  const url = `https://api.coingecko.com/api/v3/coins/ethereum/history?date=${formattedDate}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    return data.market_data?.current_price?.usd || 0;
  } catch (error) {
    console.warn(`Failed to fetch ETH price for ${formattedDate}:`, error);
    return 0;
  }
}

/**
 * Convert hex gas price to gwei
 */
function hexToGwei(hex: string): string {
  const wei = parseInt(hex, 16);
  const gwei = wei / 1e9;
  return gwei.toFixed(2);
}

/**
 * Calculate typical transaction cost in USD
 * Assumes 21000 gas (simple ETH transfer)
 */
function calculateTxCost(gasPriceGwei: number, ethPriceUsd: number): number {
  const gasLimit = 21000;
  const costEth = (gasPriceGwei * gasLimit) / 1e9;
  return parseFloat((costEth * ethPriceUsd).toFixed(2));
}

/**
 * Fetch context for a specific block
 */
async function fetchBlockContext(blockNumber: number): Promise<BlockContext> {
  console.log(`Fetching context for block ${blockNumber}...`);
  
  // Fetch block data
  const block = await fetchBlockFromEtherscan(blockNumber);
  const timestamp = parseInt(block.timestamp, 16);
  const gasPriceHex = block.baseFeePerGas || block.gasPrice || '0x0';
  const gasPriceGwei = parseFloat(hexToGwei(gasPriceHex));
  
  // Fetch ETH price for the block's date
  const date = new Date(timestamp * 1000);
  const ethPriceUsd = await fetchEthPriceForDate(date);
  
  // Calculate typical tx cost
  const typicalTxCostUsd = calculateTxCost(gasPriceGwei, ethPriceUsd);
  
  return {
    blockNumber,
    timestamp,
    gasPrice: gasPriceGwei.toFixed(2),
    ethPriceUsd,
    typicalTxCostUsd,
  };
}

/**
 * Key blocks to fetch (major timeline events)
 */
const KEY_BLOCKS = [
  0,          // Genesis
  200000,     // Frontier Thawing
  1150000,    // Homestead
  1920000,    // DAO Fork
  2463000,    // Tangerine Whistle
  2675000,    // Spurious Dragon
  4370000,    // Byzantium
  7280000,    // Constantinople
  9069000,    // Istanbul
  12244000,   // Berlin
  12965000,   // London (EIP-1559)
  13773000,   // Arrow Glacier
  15537394,   // The Merge
  17034870,   // Shanghai
  19426587,   // Dencun
  // Add more key blocks as needed
];

/**
 * Main function
 */
async function main() {
  if (!ETHERSCAN_API_KEY) {
    console.error('❌ ETHERSCAN_API_KEY not set!');
    console.log('Get a free key: https://etherscan.io/apis');
    console.log('Then: export ETHERSCAN_API_KEY=your_key');
    process.exit(1);
  }
  
  console.log('🔍 Fetching block context data...');
  console.log(`📦 Will fetch ${KEY_BLOCKS.length} blocks`);
  
  const contexts: BlockContext[] = [];
  
  for (const blockNumber of KEY_BLOCKS) {
    try {
      const context = await fetchBlockContext(blockNumber);
      contexts.push(context);
      
      console.log(`✅ Block ${blockNumber}: ${context.gasPrice} gwei, $${context.ethPriceUsd} ETH, $${context.typicalTxCostUsd} tx`);
      
      // Rate limiting: wait 200ms between requests
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (error) {
      console.error(`❌ Failed to fetch block ${blockNumber}:`, error);
    }
  }
  
  // Save to file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(contexts, null, 2));
  console.log(`\n✅ Saved ${contexts.length} block contexts to ${OUTPUT_FILE}`);
}

// Run
main().catch(console.error);
