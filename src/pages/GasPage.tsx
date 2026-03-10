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
    rpcUrl: 'https://eth.llamarpc.com',
    color: '#627EEA',
    nativeCurrency: 'ETH',
    explorer: 'https://etherscan.io',
  },
  {
    id: 'optimism',
    name: 'Optimism',
    rpcUrl: 'https://mainnet.optimism.io',
    color: '#FF0420',
    nativeCurrency: 'ETH',
    explorer: 'https://optimistic.etherscan.io',
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum One',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    color: '#28A0F0',
    nativeCurrency: 'ETH',
    explorer: 'https://arbiscan.io',
  },
  {
    id: 'base',
    name: 'Base',
    rpcUrl: 'https://mainnet.base.org',
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
    rpcUrl: 'https://rpc.linea.build',
    color: '#121212',
    nativeCurrency: 'ETH',
    explorer: 'https://lineascan.build',
  },
  {
    id: 'scroll',
    name: 'Scroll',
    rpcUrl: 'https://rpc.scroll.io',
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
    // Fetch current gas price
    const gasPriceResponse = await fetch(chain.rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_gasPrice',
        params: [],
        id: 1,
      }),
    })

    const gasPriceData = await gasPriceResponse.json()
    if (gasPriceData.error) {
      throw new Error(gasPriceData.error.message)
    }

    const gasPriceWei = BigInt(gasPriceData.result)
    const gasPriceGwei = Number(gasPriceWei) / 1e9

    // Calculate cost
    const costWei = gasPriceWei * BigInt(gasLimit)
    const costETH = Number(costWei) / 1e18
    const costUSD = costETH * ethPriceUSD

    return {
      action: '',
      gasLimit,
      gasPrice: gasPriceGwei.toFixed(2),
      costETH: costETH.toFixed(6),
      costUSD: costUSD.toFixed(2),
      loading: false,
    }
  } catch (error) {
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
  const [loading, setLoading] = useState(true)
  const [ethPrice, setEthPrice] = useState<number>(2045) // fallback price

  useEffect(() => {
    async function fetchEstimates() {
      setLoading(true)
      
      // Fetch ETH price first
      const currentEthPrice = await fetchEthPrice()
      setEthPrice(currentEthPrice)
      
      const newEstimates: Record<string, Record<string, GasEstimate>> = {}

      for (const chain of CHAINS) {
        newEstimates[chain.id] = {}
        for (const action of ACTIONS) {
          const estimate = await estimateGas(chain, action.gasEstimate, currentEthPrice)
          newEstimates[chain.id][action.id] = {
            ...estimate,
            action: action.name,
          }
        }
      }

      setEstimates(newEstimates)
      setLoading(false)
    }

    fetchEstimates()
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchEstimates, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen py-12 px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--eth-purple)] mx-auto mb-4"></div>
          <p className="text-[var(--text-muted)]">Fetching live gas prices from RPCs...</p>
        </div>
      </main>
    )
  }

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
            Updated every 30 seconds • ETH @ ${ethPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[var(--bg-tertiary)]">
                <th className="text-left py-4 px-4 font-medium text-[var(--text-muted)]">
                  Chain
                </th>
                {ACTIONS.map(action => (
                  <th key={action.id} className="text-center py-4 px-4 font-medium text-[var(--text-muted)]">
                    {action.name}
                    <br />
                    <span className="text-xs font-normal opacity-60">
                      (~{(action.gasEstimate / 1000).toFixed(0)}k gas)
                    </span>
                  </th>
                ))}
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[var(--bg-secondary)] rounded-lg p-6 border border-[var(--bg-tertiary)]">
            <h3 className="text-lg font-medium mb-4">💡 Understanding Gas</h3>
            <ul className="text-sm text-[var(--text-muted)] space-y-2">
              <li>• <strong>Gas Limit:</strong> Maximum units of gas an operation can use</li>
              <li>• <strong>Gas Price:</strong> Price per unit (in gwei: 1 gwei = 0.000000001 ETH)</li>
              <li>• <strong>Total Cost:</strong> Gas Limit × Gas Price = Transaction fee</li>
              <li>• <strong>L2 Savings:</strong> Rollups bundle many transactions, reducing per-tx cost</li>
            </ul>
          </div>

          <div className="bg-[var(--bg-secondary)] rounded-lg p-6 border border-[var(--bg-tertiary)]">
            <h3 className="text-lg font-medium mb-4">🔗 Supported Chains</h3>
            <div className="space-y-2">
              {CHAINS.map(chain => (
                <div key={chain.id} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: chain.color }}
                    />
                    <span>{chain.name}</span>
                  </div>
                  <a 
                    href={chain.explorer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--eth-purple)] hover:underline"
                  >
                    Explorer ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-[var(--text-muted)]">
          <p>
            Gas prices fetched from public RPCs. Estimates are approximate.
            <br />
            Actual costs may vary based on network congestion and transaction complexity.
          </p>
        </div>
      </div>
    </main>
  )
}
