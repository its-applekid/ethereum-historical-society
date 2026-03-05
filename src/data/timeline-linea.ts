import type { TimelineNode, Era } from './timeline-mainnet'

export type LineaEra = 'genesis'

export const TIMELINE_DATA: TimelineNode[] = [
  {
    id: 'linea-mainnet-launch',
    type: 'milestone',
    date: '2023-07-11',
    blockNumber: 0,
    title: 'Linea Mainnet Launch',
    summary: 'ConsenSys launches Linea, a zkEVM rollup bringing zero-knowledge proofs to Ethereum with full EVM equivalence.',
    era: 'genesis' as Era,
    importance: 'major',
    tags: ['protocol', 'scaling'],
    links: [
      { label: 'Launch Announcement', url: 'https://linea.mirror.xyz/6G30hwV2bBnmi1E9MfSLMbvH_NWKzGGlR4H3crKe3y4' },
    ],
  },
]

export const ERA_INFO: Record<LineaEra, { name: string; description: string; color: string }> = {
  genesis: {
    name: 'Genesis',
    description: 'zkEVM mainnet launch (2023+)',
    color: '#61DFFF',
  },
}

export function getNodesByEra(era: LineaEra): TimelineNode[] {
  return TIMELINE_DATA.filter(node => node.era === era)
}
