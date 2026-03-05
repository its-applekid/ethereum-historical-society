import type { TimelineNode, Era, NodeType, Tag, TimelineLink } from './timeline-mainnet'

// Optimism-specific eras (simplified for now, can expand later)
export type OptimismEra = 'genesis' | 'bedrock' | 'canyon'

// Initial Optimism timeline events (will expand during nightly work)
export const TIMELINE_DATA: TimelineNode[] = [
  {
    id: 'op-mainnet-launch',
    type: 'milestone',
    date: '2021-12-16',
    blockNumber: 0, // OP chain block 0
    title: 'OP Mainnet Launch',
    summary: 'Optimism launches its mainnet, bringing optimistic rollup scaling to Ethereum. The first major EVM-equivalent L2 goes live.',
    era: 'genesis' as Era,
    importance: 'major',
    tags: ['protocol', 'scaling'],
    links: [
      { label: 'Launch Announcement', url: 'https://optimism.mirror.xyz/dr95JC-Wm2sJLnl3gs9-0vPy8J_F3JwZo8KuqCdL6R8' },
      { label: 'Optimism Docs', url: 'https://docs.optimism.io' },
    ],
  },
  
  {
    id: 'op-token-airdrop',
    type: 'milestone',
    date: '2022-05-31',
    title: 'OP Token & Airdrop #1',
    summary: 'The OP token launches with the first airdrop to early users and builders. Introduces the Optimism Collective governance model.',
    era: 'genesis' as Era,
    importance: 'major',
    tags: ['protocol', 'adoption'],
    links: [
      { label: 'OP Token Announcement', url: 'https://optimism.mirror.xyz/qvd0WfuLKnePm1Gxb9dpGchPf5uDz5NSMEFdgirDS4c' },
      { label: 'Airdrop #1', url: 'https://optimism.mirror.xyz/vd5nKz0gLQ1OlMi5M4U1R9sSEpwbQwU-RjYjXN67mR8' },
    ],
  },
  
  {
    id: 'bedrock-upgrade',
    type: 'hard_fork',
    date: '2023-06-06',
    title: 'Bedrock Upgrade',
    summary: 'Major protocol upgrade bringing modular architecture, lower fees, improved EVM equivalence, and multi-client support.',
    era: 'bedrock' as Era,
    importance: 'major',
    tags: ['protocol', 'scaling'],
    links: [
      { label: 'Bedrock Announcement', url: 'https://blog.oplabs.co/introducing-optimism-bedrock/' },
      { label: 'Technical Details', url: 'https://community.optimism.io/docs/developers/bedrock/' },
    ],
  },
]

// Simplified era info for Optimism
export const ERA_INFO: Record<OptimismEra, { name: string; description: string; color: string }> = {
  genesis: {
    name: 'Genesis',
    description: 'OP Mainnet launch and initial growth (2021-2023)',
    color: '#FF0420',
  },
  bedrock: {
    name: 'Bedrock Era',
    description: 'Modular architecture and improved performance (2023+)',
    color: '#FF3855',
  },
  canyon: {
    name: 'Canyon Era', 
    description: 'Future upgrades and optimizations',
    color: '#FF6B85',
  },
}

export function getNodesByEra(era: OptimismEra): TimelineNode[] {
  return TIMELINE_DATA.filter(node => node.era === era)
}
