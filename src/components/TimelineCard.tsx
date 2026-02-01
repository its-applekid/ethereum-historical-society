import type { TimelineNode, Tag } from '../data/timeline'

interface TimelineCardProps {
  node: TimelineNode
  isSelected: boolean
  onClick: () => void
}

// Tag styling with gradient color pairs
const TAG_CONFIG: Record<Tag, { 
  label: string
  color: string
  bg: string
  emoji: string
  // Gradient colors: [from, via, to] for dynamic backgrounds
  gradient: [string, string, string]
}> = {
  protocol: { 
    label: 'Protocol', 
    color: 'text-purple-400', 
    bg: 'bg-purple-500/20', 
    emoji: '⛓️',
    gradient: ['#8B5CF6', '#7C3AED', '#6D28D9'], // Purple shades
  },
  scaling: { 
    label: 'Scaling', 
    color: 'text-blue-400', 
    bg: 'bg-blue-500/20', 
    emoji: '📈',
    gradient: ['#3B82F6', '#2563EB', '#1D4ED8'], // Blue shades
  },
  defi: { 
    label: 'DeFi', 
    color: 'text-emerald-400', 
    bg: 'bg-emerald-500/20', 
    emoji: '💰',
    gradient: ['#10B981', '#059669', '#047857'], // Emerald to green
  },
  nft: { 
    label: 'NFT', 
    color: 'text-amber-400', 
    bg: 'bg-amber-500/20', 
    emoji: '🖼️',
    gradient: ['#F59E0B', '#D97706', '#B45309'], // Amber to orange
  },
  social: { 
    label: 'Social', 
    color: 'text-pink-400', 
    bg: 'bg-pink-500/20', 
    emoji: '💬',
    gradient: ['#EC4899', '#DB2777', '#BE185D'], // Pink shades
  },
  research: { 
    label: 'Research', 
    color: 'text-indigo-400', 
    bg: 'bg-indigo-500/20', 
    emoji: '🔬',
    gradient: ['#6366F1', '#4F46E5', '#4338CA'], // Indigo shades
  },
  security: { 
    label: 'Security', 
    color: 'text-red-400', 
    bg: 'bg-red-500/20', 
    emoji: '🔒',
    gradient: ['#EF4444', '#DC2626', '#B91C1C'], // Red shades
  },
  adoption: { 
    label: 'Adoption', 
    color: 'text-green-400', 
    bg: 'bg-green-500/20', 
    emoji: '🏛️',
    gradient: ['#22C55E', '#16A34A', '#15803D'], // Green shades
  },
  tvl: { 
    label: 'TVL', 
    color: 'text-teal-400', 
    bg: 'bg-teal-500/20', 
    emoji: '📊',
    gradient: ['#14B8A6', '#0D9488', '#0F766E'], // Teal shades
  },
  blobs: { 
    label: 'Blobs', 
    color: 'text-cyan-400', 
    bg: 'bg-cyan-500/20', 
    emoji: '🫧',
    gradient: ['#06B6D4', '#0891B2', '#0E7490'], // Cyan shades
  },
}

// Default gradient for untagged events
const DEFAULT_GRADIENT: [string, string, string] = ['#6B7280', '#4B5563', '#374151']

export function TimelineCard({ node, isSelected, onClick }: TimelineCardProps) {
  const tags = node.tags || []
  const primaryTag = tags[0]
  const formattedDate = new Date(node.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  
  // Get gradient colors from primary tag
  const gradientColors = primaryTag ? TAG_CONFIG[primaryTag].gradient : DEFAULT_GRADIENT
  const gradientStyle = {
    background: `linear-gradient(135deg, ${gradientColors[0]}40 0%, ${gradientColors[1]}50 50%, ${gradientColors[2]}40 100%)`,
  }

  /* 
   * NOTE: Image support is commented out for now. 
   * The fetch-og-images.ts script can still populate imageUrls.
   * Uncomment below to re-enable image cards.
   */
  // const hasImage = !!node.imageUrl
  const hasImage = false // Images disabled - using gradient backgrounds instead

  return (
    <button
      onClick={onClick}
      className={`
        block w-full rounded-xl border transition-all duration-300 text-left overflow-hidden
        ${isSelected 
          ? 'border-[var(--eth-purple)] shadow-lg shadow-[var(--eth-purple)]/20' 
          : 'border-[var(--bg-tertiary)] hover:border-[var(--eth-purple)]/50 hover:shadow-lg'
        }
      `}
      style={hasImage ? { background: 'transparent' } : gradientStyle}
    >
      {hasImage ? (
        /* Card with image - glassmorphism design (COMMENTED OUT) */
        <div className="relative">
          {/* Full-card background image */}
          <img 
            src={node.imageUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          
          {/* Content wrapper */}
          <div className="relative flex flex-col">
            {/* Top 40%: Clear image with tag + date overlay */}
            <div className="relative h-[100px] sm:h-[110px]">
              {/* Subtle darkening for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
              
              {/* Tag + Date overlay on image */}
              <div className="relative h-full flex items-start justify-between p-3">
                {tags.length > 0 && (
                  <span 
                    className="px-2 py-1 rounded text-xs font-medium backdrop-blur-sm"
                    style={{
                      background: 'rgba(0,0,0,0.4)',
                      color: 'white',
                    }}
                  >
                    {TAG_CONFIG[tags[0]].emoji} {TAG_CONFIG[tags[0]].label}
                  </span>
                )}
                <span 
                  className="text-xs backdrop-blur-sm px-2 py-1 rounded shrink-0"
                  style={{
                    background: 'rgba(0,0,0,0.4)',
                    color: 'rgba(255,255,255,0.9)',
                  }}
                >
                  {formattedDate}
                </span>
              </div>
            </div>
            
            {/* Bottom 60%: Glassmorphism content */}
            <div className="relative">
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, var(--glass-bg-transparent) 0%, var(--glass-bg) 40%, var(--glass-bg-solid) 100%)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              />
              
              <div className="relative p-4 flex flex-col justify-end">
                <h3 className="text-lg font-semibold leading-tight mb-2 text-[var(--text-primary)]">
                  {node.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-3">
                  {node.summary}
                </p>
                <div className="flex items-end justify-between">
                  {node.relatedEips && node.relatedEips.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {node.relatedEips.slice(0, 3).map((eip) => (
                        <span 
                          key={eip}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-[var(--bg-primary)]/80 text-[var(--text-muted)]"
                        >
                          EIP-{eip}
                        </span>
                      ))}
                      {node.relatedEips.length > 3 && (
                        <span className="text-xs text-[var(--text-muted)]">+{node.relatedEips.length - 3}</span>
                      )}
                    </div>
                  ) : (
                    <div />
                  )}
                  {node.blockNumber !== undefined && (
                    <span className="text-xs font-mono text-[var(--text-muted)] shrink-0 ml-2">
                      {node.approximateBlock && '~'}#{node.blockNumber.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Card with gradient background */
        <div className="p-5">
          {/* Top row: Primary tag (left) + Date (right) */}
          <div className="flex items-center justify-between mb-2">
            {tags.length > 0 && (
              <span 
                className={`px-2 py-0.5 rounded text-xs font-medium ${TAG_CONFIG[tags[0]].color} ${TAG_CONFIG[tags[0]].bg}`}
              >
                {TAG_CONFIG[tags[0]].emoji} {TAG_CONFIG[tags[0]].label}
              </span>
            )}
            <span className="text-sm text-[var(--text-muted)] shrink-0 ml-2">
              {formattedDate}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold leading-tight mb-3">
            {node.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-[var(--text-secondary)] mb-3">
            {node.summary}
          </p>

          {/* Bottom row: Related EIPs (left) + Block number (right) */}
          <div className="flex items-end justify-between">
            {node.relatedEips && node.relatedEips.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {node.relatedEips.map((eip) => (
                  <span 
                    key={eip}
                    className="px-2 py-0.5 bg-[var(--bg-primary)]/50 rounded text-xs font-mono text-[var(--text-muted)]"
                  >
                    EIP-{eip}
                  </span>
                ))}
              </div>
            ) : (
              <div />
            )}

            {node.blockNumber !== undefined && (
              <span className="text-xs font-mono text-[var(--text-muted)] shrink-0 ml-2">
                {node.approximateBlock && '~'}#{node.blockNumber.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      )}
    </button>
  )
}
