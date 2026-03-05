import type { TimelineNode, Era } from './timeline-mainnet'

export type ScrollEra = 'genesis'

export const TIMELINE_DATA: TimelineNode[] = [
  {
    id: 'scroll-mainnet-launch',
    type: 'milestone',
    date: '2023-10-10',
    blockNumber: 0,
    title: 'Scroll Mainnet Launch',
    summary: 'Scroll launches as a bytecode-level compatible zkEVM, bringing native zero-knowledge proofs to Ethereum scaling.',
    era: 'genesis' as Era,
    importance: 'major',
    tags: ['protocol', 'scaling'],
    links: [
      { label: 'Launch Announcement', url: 'https://scroll.io/blog/founderLetter' },
    ],
  },
]

export const ERA_INFO: Record<ScrollEra, { name: string; description: string; color: string }> = {
  genesis: {
    name: 'Genesis',
    description: 'zkEVM mainnet launch (2023+)',
    color: '#FFEEDA',
  },
}

export function getNodesByEra(era: ScrollEra): TimelineNode[] {
  return TIMELINE_DATA.filter(node => node.era === era)
}
