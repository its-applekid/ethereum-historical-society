import type { TimelineNode, Era, NodeType, Tag, TimelineLink } from './timeline-mainnet'

export type ArbitrumEra = 'genesis' | 'nitro'

export const TIMELINE_DATA: TimelineNode[] = [
  {
    id: 'arbitrum-one-launch',
    type: 'milestone',
    date: '2021-08-31',
    blockNumber: 0,
    title: 'Arbitrum One Launch',
    summary: 'Arbitrum One mainnet goes live, bringing optimistic rollup scaling to Ethereum with full EVM compatibility.',
    era: 'genesis' as Era,
    importance: 'major',
    tags: ['protocol', 'scaling'],
    links: [
      { label: 'Launch Announcement', url: 'https://offchain.medium.com/mainnet-for-everyone-27ce0f67c85e' },
    ],
  },
  
  {
    id: 'arb-token-launch',
    type: 'milestone',
    date: '2023-03-23',
    title: 'ARB Token Launch',
    summary: 'ARB governance token launches with airdrop to users and DAOs. Introduces DAO governance for the Arbitrum network.',
    era: 'genesis' as Era,
    importance: 'major',
    tags: ['protocol', 'adoption'],
    links: [
      { label: 'ARB Announcement', url: 'https://arbitrum.foundation/airdrop' },
    ],
  },
  
  {
    id: 'nitro-upgrade',
    type: 'hard_fork',
    date: '2022-08-31',
    title: 'Nitro Upgrade',
    summary: 'Major upgrade to Nitro stack brings 7-10x faster transactions and significantly lower fees through advanced fraud proofs.',
    era: 'nitro' as Era,
    importance: 'major',
    tags: ['protocol', 'scaling'],
    links: [
      { label: 'Nitro Announcement', url: 'https://offchain.medium.com/its-nitro-time-86944693bf29' },
    ],
  },
]

export const ERA_INFO: Record<ArbitrumEra, { name: string; description: string; color: string }> = {
  genesis: {
    name: 'Genesis',
    description: 'Arbitrum One launch and initial adoption (2021-2022)',
    color: '#28A0F0',
  },
  nitro: {
    name: 'Nitro Era',
    description: 'Advanced fraud proofs and performance (2022+)',
    color: '#4FB8FF',
  },
}

export function getNodesByEra(era: ArbitrumEra): TimelineNode[] {
  return TIMELINE_DATA.filter(node => node.era === era)
}
