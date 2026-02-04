import type { TimelineNode, Tag } from '../data/timeline'

interface TimelineCardProps {
  node: TimelineNode
  isSelected: boolean
  onClick: () => void
}

// Tag styling using Gruvbox colors
const TAG_CONFIG: Record<Tag, { 
  label: string
  emoji: string
  // Gruvbox accent color (bright variant for visibility)
  accent: string
  // Background: solid Gruvbox bg with slight tint
  bg: string
}> = {
  protocol: { 
    label: 'Protocol', 
    emoji: '⛓️',
    accent: 'var(--gruvbox-purple-bright)',
    bg: 'var(--gruvbox-bg1)',
  },
  scaling: { 
    label: 'Scaling', 
    emoji: '📈',
    accent: 'var(--gruvbox-blue-bright)',
    bg: 'var(--gruvbox-bg1)',
  },
  defi: { 
    label: 'DeFi', 
    emoji: '💰',
    accent: 'var(--gruvbox-green-bright)',
    bg: 'var(--gruvbox-bg1)',
  },
  nft: { 
    label: 'NFT', 
    emoji: '🖼️',
    accent: 'var(--gruvbox-yellow-bright)',
    bg: 'var(--gruvbox-bg1)',
  },
  social: { 
    label: 'Social', 
    emoji: '💬',
    accent: 'var(--gruvbox-purple-bright)',
    bg: 'var(--gruvbox-bg1)',
  },
  research: { 
    label: 'Research', 
    emoji: '🔬',
    accent: 'var(--gruvbox-blue-bright)',
    bg: 'var(--gruvbox-bg1)',
  },
  security: { 
    label: 'Security', 
    emoji: '🔒',
    accent: 'var(--gruvbox-red-bright)',
    bg: 'var(--gruvbox-bg1)',
  },
  adoption: { 
    label: 'Adoption', 
    emoji: '🏛️',
    accent: 'var(--gruvbox-aqua-bright)',
    bg: 'var(--gruvbox-bg1)',
  },
  tvl: { 
    label: 'TVL', 
    emoji: '📊',
    accent: 'var(--gruvbox-aqua-bright)',
    bg: 'var(--gruvbox-bg1)',
  },
  blobs: { 
    label: 'Blobs', 
    emoji: '🫧',
    accent: 'var(--gruvbox-blue-bright)',
    bg: 'var(--gruvbox-bg1)',
  },
}

export function TimelineCard({ node, isSelected, onClick }: TimelineCardProps) {
  const tags = node.tags || []
  const primaryTag = tags[0]
  const formattedDate = new Date(node.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  
  // Get accent color from primary tag
  const accentColor = primaryTag ? TAG_CONFIG[primaryTag].accent : 'var(--gruvbox-fg4)'

  return (
    <button
      onClick={onClick}
      className={`
        block w-full rounded-xl border transition-all duration-300 text-left overflow-hidden
        ${isSelected 
          ? 'border-[var(--eth-purple)] shadow-lg shadow-[var(--eth-purple)]/20' 
          : 'border-[var(--gruvbox-bg3)] hover:border-[var(--eth-purple)]/50 hover:shadow-lg'
        }
      `}
      style={{ 
        backgroundColor: 'var(--bg-card)',
        borderLeftWidth: '3px',
        borderLeftColor: accentColor,
      }}
    >
      <div className="p-5">
        {/* Top row: Primary tag (left) + Date (right) */}
        <div className="flex items-center justify-between mb-2">
          {tags.length > 0 && (
            <span 
              className="px-2 py-0.5 rounded text-xs font-medium"
              style={{
                backgroundColor: 'var(--bg-card-accent)',
                color: accentColor,
              }}
            >
              {TAG_CONFIG[tags[0]].emoji} {TAG_CONFIG[tags[0]].label}
            </span>
          )}
          <span 
            className="text-sm shrink-0 ml-2"
            style={{ color: 'var(--text-muted)' }}
          >
            {formattedDate}
          </span>
        </div>

        {/* Title */}
        <h3 
          className="text-lg font-semibold leading-tight mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          {node.title}
        </h3>

        {/* Summary */}
        <p 
          className="text-sm mb-3"
          style={{ color: 'var(--text-secondary)' }}
        >
          {node.summary}
        </p>

        {/* Bottom row: Related EIPs (left) + Block number (right) */}
        <div className="flex items-end justify-between">
          {node.relatedEips && node.relatedEips.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {node.relatedEips.map((eip) => (
                <span 
                  key={eip}
                  className="px-2 py-0.5 rounded text-xs font-mono"
                  style={{
                    backgroundColor: 'var(--bg-card-accent)',
                    color: 'var(--text-muted)',
                  }}
                >
                  EIP-{eip}
                </span>
              ))}
            </div>
          ) : (
            <div />
          )}

          {node.blockNumber !== undefined && (
            <span 
              className="text-xs font-mono shrink-0 ml-2"
              style={{ color: 'var(--text-muted)' }}
            >
              {node.approximateBlock && '~'}#{node.blockNumber.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </button>
  )
}
