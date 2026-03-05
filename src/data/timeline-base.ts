import type { TimelineNode, Era } from './timeline-mainnet'

export type BaseEra = 'genesis'

export const TIMELINE_DATA: TimelineNode[] = [
  {
    id: 'base-mainnet-launch',
    type: 'milestone',
    date: '2023-07-13',
    blockNumber: 0,
    title: 'Base Mainnet Launch',
    summary: 'Coinbase launches Base, an Ethereum L2 built on the OP Stack. Brings Coinbase\'s 110M users on-chain.',
    era: 'genesis' as Era,
    importance: 'major',
    tags: ['protocol', 'scaling', 'adoption'],
    links: [
      { label: 'Launch Announcement', url: 'https://base.mirror.xyz/H_KPwV31M7OJT-THUnU7wYjOF16Sy7aWqIgU Pera' },
    ],
  },
  
  {
    id: 'base-coinbase-integration',
    type: 'milestone',
    date: '2023-08-09',
    title: 'Coinbase Wallet Integration',
    summary: 'Base integrates directly into Coinbase products, enabling seamless on-chain transactions for millions of users.',
    era: 'genesis' as Era,
    importance: 'significant',
    tags: ['adoption'],
    links: [
      { label: 'Coinbase Integration', url: 'https://www.coinbase.com/blog/base-is-now-available' },
    ],
  },
]

export const ERA_INFO: Record<BaseEra, { name: string; description: string; color: string }> = {
  genesis: {
    name: 'Genesis',
    description: 'Base mainnet launch and Coinbase integration (2023+)',
    color: '#0052FF',
  },
}

export function getNodesByEra(era: BaseEra): TimelineNode[] {
  return TIMELINE_DATA.filter(node => node.era === era)
}
