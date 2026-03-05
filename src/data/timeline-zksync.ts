import type { TimelineNode, Era } from './timeline-mainnet'

export type ZkSyncEra = 'era'

export const TIMELINE_DATA: TimelineNode[] = [
  {
    id: 'zksync-era-mainnet',
    type: 'milestone',
    date: '2023-03-24',
    blockNumber: 0,
    title: 'zkSync Era Mainnet',
    summary: 'zkSync Era launches as a ZK rollup with full EVM compatibility, bringing zero-knowledge proofs to Ethereum scaling.',
    era: 'era' as Era,
    importance: 'major',
    tags: ['protocol', 'scaling'],
    links: [
      { label: 'Launch Announcement', url: 'https://blog.matter-labs.io/all-aboard-zksync-era-mainnet-8b8964ba7c59' },
    ],
  },
]

export const ERA_INFO: Record<ZkSyncEra, { name: string; description: string; color: string }> = {
  era: {
    name: 'zkSync Era',
    description: 'ZK rollup mainnet with EVM compatibility (2023+)',
    color: '#8C8DFC',
  },
}

export function getNodesByEra(era: ZkSyncEra): TimelineNode[] {
  return TIMELINE_DATA.filter(node => node.era === era)
}
