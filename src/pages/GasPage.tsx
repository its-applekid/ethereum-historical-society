import { useState, useEffect } from 'react'

interface Chain {
  id: string
  name: string
  rpcUrl: string
  color: string
  nativeCurrency: string
  explorer: string
}

interface GasEstimate {
  action: string
  gasLimit: number
  gasPrice: string // in gwei
  costETH: string
  costUSD: string
  loading: boolean
  error?: string
}

const CHAINS: Chain[] = [
  {
    id: 'ethereum',
    name: 'Ethereum',
    rpcUrl: 'https://ethereum-rpc.publicnode.com',
    color: '#627EEA',
    nativeCurrency: 'ETH',
    explorer: 'https://etherscan.io',
  },
  {
    id: 'optimism',
    name: 'Optimism',
    rpcUrl: 'https://optimism-rpc.publicnode.com',
    color: '#FF0420',
    nativeCurrency: 'ETH',
    explorer: 'https://optimistic.etherscan.io',
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum One',
    rpcUrl: 'https://arbitrum-one-rpc.publicnode.com',
    color: '#28A0F0',
    nativeCurrency: 'ETH',
    explorer: 'https://arbiscan.io',
  },
  {
    id: 'base',
    name: 'Base',
    rpcUrl: 'https://base-rpc.publicnode.com',
    color: '#0052FF',
    nativeCurrency: 'ETH',
    explorer: 'https://basescan.org',
  },
  {
    id: 'zksync',
    name: 'zkSync Era',
    rpcUrl: 'https://mainnet.era.zksync.io',
    color: '#8C8DFC',
    nativeCurrency: 'ETH',
    explorer: 'https://explorer.zksync.io',
  },
  {
    id: 'linea',
    name: 'Linea',
    rpcUrl: 'https://linea-rpc.publicnode.com',
    color: '#121212',
    nativeCurrency: 'ETH',
    explorer: 'https://lineascan.build',
  },
  {
    id: 'scroll',
    name: 'Scroll',
    rpcUrl: 'https://scroll-rpc.publicnode.com',
    color: '#FFEEDA',
    nativeCurrency: 'ETH',
    explorer: 'https://scrollscan.com',
  },
]

const ACTIONS = [
  { id: 'eth_transfer', name: 'ETH Transfer', gasEstimate: 21000 },
  { id: 'erc20_transfer', name: 'ERC-20 Transfer', gasEstimate: 65000 },
  { id: 'uniswap_swap', name: 'Uniswap Swap', gasEstimate: 150000 },
  { id: 'morpho_deposit', name: 'Morpho Deposit', gasEstimate: 200000 },
  { id: 'bridge_deposit', name: 'Bridge to L2', gasEstimate: 120000, l1Only: true },
  { id: 'bridge_withdraw', name: 'Bridge to L1', gasEstimate: 250000, l2Only: true },
]

// ETH price fetched from Coinbase API (free, no API key required)

async function fetchEthPrice(): Promise<number> {
  try {
    const response = await fetch('https://api.coinbase.com/v2/prices/ETH-USD/spot')
    const data = await response.json()
    return parseFloat(data.data.amount)
  } catch (error) {
    console.warn('Failed to fetch ETH price from Coinbase, using fallback:', error)
    return 2045 // fallback
  }
}

async function estimateGas(chain: Chain, gasLimit: number, ethPriceUSD: number): Promise<GasEstimate> {
  try {
    // Fetch current gas price with timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)
    
    const gasPriceResponse = await fetch(chain.rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_gasPrice',
        params: [],
        id: 1,
      }),
      signal: controller.signal,
    })
    
    clearTimeout(timeoutId)
    
    if (!gasPriceResponse.ok) {
      throw new Error(`HTTP ${gasPriceResponse.status}`)
    }

    const gasPriceData = await gasPriceResponse.json()
    if (gasPriceData.error) {
      console.error(`RPC error for ${chain.name}:`, gasPriceData.error)
      throw new Error(gasPriceData.error.message)
    }

    if (!gasPriceData.result) {
      throw new Error('No result from RPC')
    }

    const gasPriceWei = BigInt(gasPriceData.result)
    const gasPriceGwei = Number(gasPriceWei) / 1e9

    // Calculate cost
    const costWei = gasPriceWei * BigInt(gasLimit)
    const costETH = Number(costWei) / 1e18
    const costUSD = costETH * ethPriceUSD

    // Format with appropriate precision
    const formattedCostUSD = costUSD < 0.01 ? costUSD.toFixed(4) : costUSD.toFixed(2)
    const formattedGasPrice = gasPriceGwei < 0.01 ? gasPriceGwei.toFixed(4) : gasPriceGwei.toFixed(2)
    const formattedCostETH = costETH < 0.000001 ? costETH.toFixed(9) : costETH.toFixed(6)

    return {
      action: '',
      gasLimit,
      gasPrice: formattedGasPrice,
      costETH: formattedCostETH,
      costUSD: formattedCostUSD,
      loading: false,
    }
  } catch (error) {
    console.error(`Gas estimation failed for ${chain.name}:`, error)
    return {
      action: '',
      gasLimit,
      gasPrice: '0',
      costETH: '0',
      costUSD: '0',
      loading: false,
      error: error instanceof Error ? error.message : 'Failed to estimate',
    }
  }
}

export function GasPage() {
  const [estimates, setEstimates] = useState<Record<string, Record<string, GasEstimate>>>({})
  const [ethPrice, setEthPrice] = useState<number>(2045) // fallback price

  useEffect(() => {
    async function fetchEstimates() {
      // Fetch ETH price first
      const currentEthPrice = await fetchEthPrice()
      setEthPrice(currentEthPrice)
      
      const newEstimates: Record<string, Record<string, GasEstimate>> = {}

      for (const chain of CHAINS) {
        newEstimates[chain.id] = {}
        const isL1 = chain.id === 'ethereum'
        
        for (const action of ACTIONS) {
          // Skip if action doesn't apply to this chain type
          if ((action as any).l1Only && !isL1) {
            continue // Will show N/A in the table
          }
          if ((action as any).l2Only && isL1) {
            continue // Will show N/A in the table
          }
          
          const estimate = await estimateGas(chain, action.gasEstimate, currentEthPrice)
          newEstimates[chain.id][action.id] = {
            ...estimate,
            action: action.name,
          }
        }
      }

      setEstimates(newEstimates)
    }

    fetchEstimates()
    
    // Refresh every minute
    const interval = setInterval(fetchEstimates, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ⛽ Live Gas Tracker
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-2">
            Real-time gas costs across Ethereum and Layer 2s
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Updated every minute • ETH @ ${ethPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[var(--bg-tertiary)]">
                <th className="text-left py-4 px-4 font-medium text-[var(--text-muted)]">
                  Chain
                </th>
                {ACTIONS.map(action => {
                  const actionTyped = action as any
                  const tooltip = actionTyped.l1Only 
                    ? 'Deposit from Ethereum to L2 (happens on L1)'
                    : actionTyped.l2Only
                    ? 'Withdraw from L2 to Ethereum (initiate on L2 + prove on L1)'
                    : ''
                  
                  return (
                    <th 
                      key={action.id} 
                      className="text-center py-4 px-4 font-medium text-[var(--text-muted)]"
                      title={tooltip}
                    >
                      {action.name}
                      <br />
                      <span className="text-xs font-normal opacity-60">
                        (~{(action.gasEstimate / 1000).toFixed(0)}k gas)
                      </span>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {CHAINS.map(chain => (
                <tr 
                  key={chain.id}
                  className="border-b border-[var(--bg-tertiary)] hover:bg-[var(--bg-secondary)] transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: chain.color }}
                      />
                      <div>
                        <div className="font-medium">{chain.name}</div>
                        <div className="text-xs text-[var(--text-muted)]">
                          {estimates[chain.id]?.[ACTIONS[0].id]?.gasPrice || '—'} gwei
                        </div>
                      </div>
                    </div>
                  </td>
                  {ACTIONS.map(action => {
                    const isL1 = chain.id === 'ethereum'
                    const actionTyped = action as any
                    
                    // Show N/A if action doesn't apply to this chain
                    if ((actionTyped.l1Only && !isL1) || (actionTyped.l2Only && isL1)) {
                      return (
                        <td key={action.id} className="text-center py-4 px-4">
                          <span className="text-[var(--text-muted)] text-sm">N/A</span>
                        </td>
                      )
                    }
                    
                    const estimate = estimates[chain.id]?.[action.id]
                    if (!estimate) {
                      return <td key={action.id} className="text-center py-4 px-4">—</td>
                    }
                    if (estimate.error) {
                      return (
                        <td key={action.id} className="text-center py-4 px-4">
                          <div className="text-xs text-red-400">Error</div>
                        </td>
                      )
                    }
                    return (
                      <td key={action.id} className="text-center py-4 px-4">
                        <div className="font-medium text-[var(--eth-green)]">
                          ${estimate.costUSD}
                        </div>
                        <div className="text-xs text-[var(--text-muted)]">
                          {estimate.costETH} ETH
                        </div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
