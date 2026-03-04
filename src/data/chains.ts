export type ChainId = 'mainnet' | 'optimism' | 'arbitrum' | 'base' | 'zksync' | 'linea' | 'scroll'

export interface Chain {
  id: ChainId
  name: string
  displayName: string
  logo: string
  launchDate: string  // ISO 8601
  launchBlock: number  // mainnet block when L2 launched
  color: string  // brand color (for line visualization)
  website: string
}

export const CHAINS: Record<ChainId, Chain> = {
  mainnet: {
    id: 'mainnet',
    name: 'ethereum',
    displayName: 'Ethereum',
    logo: '/logos/ethereum.svg',
    launchDate: '2015-07-30T15:26:13Z',
    launchBlock: 0,
    color: '#627EEA',  // Ethereum blue
    website: 'https://ethereum.org',
  },
  
  optimism: {
    id: 'optimism',
    name: 'optimism',
    displayName: 'Optimism',
    logo: '/logos/optimism.svg',
    launchDate: '2021-12-16T00:00:00Z',
    launchBlock: 13679077,  // OP Mainnet launch block on Ethereum
    color: '#FF0420',  // Optimism red
    website: 'https://optimism.io',
  },
  
  arbitrum: {
    id: 'arbitrum',
    name: 'arbitrum',
    displayName: 'Arbitrum',
    logo: '/logos/arbitrum.svg',
    launchDate: '2021-08-31T00:00:00Z',
    launchBlock: 13142323,  // Arbitrum One launch
    color: '#28A0F0',  // Arbitrum blue
    website: 'https://arbitrum.io',
  },
  
  base: {
    id: 'base',
    name: 'base',
    displayName: 'Base',
    logo: '/logos/base.svg',
    launchDate: '2023-07-13T00:00:00Z',
    launchBlock: 17671665,  // Base mainnet launch
    color: '#0052FF',  // Base blue
    website: 'https://base.org',
  },
  
  zksync: {
    id: 'zksync',
    name: 'zksync',
    displayName: 'zkSync',
    logo: '/logos/zksync.svg',
    launchDate: '2023-03-24T00:00:00Z',
    launchBlock: 16941600,  // zkSync Era mainnet
    color: '#8C8DFC',  // zkSync purple
    website: 'https://zksync.io',
  },
  
  linea: {
    id: 'linea',
    name: 'linea',
    displayName: 'Linea',
    logo: '/logos/linea.svg',
    launchDate: '2023-07-11T00:00:00Z',
    launchBlock: 17660345,  // Linea mainnet
    color: '#61DFFF',  // Linea cyan
    website: 'https://linea.build',
  },
  
  scroll: {
    id: 'scroll',
    name: 'scroll',
    displayName: 'Scroll',
    logo: '/logos/scroll.svg',
    launchDate: '2023-10-10T00:00:00Z',
    launchBlock: 18324600,  // Scroll mainnet
    color: '#FFEEDA',  // Scroll cream/beige
    website: 'https://scroll.io',
  },
}

// Helper to get chains in launch order
export const CHAINS_BY_LAUNCH = Object.values(CHAINS).sort(
  (a, b) => new Date(a.launchDate).getTime() - new Date(b.launchDate).getTime()
)

// Helper to check if a chain should be unlocked based on scroll position
export function shouldUnlockChain(chain: Chain, currentBlockNumber: number): boolean {
  if (chain.id === 'mainnet') return true  // mainnet always unlocked
  return currentBlockNumber >= chain.launchBlock
}
