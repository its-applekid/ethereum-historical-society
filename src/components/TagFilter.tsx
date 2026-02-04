import { useState, useRef, useEffect } from 'react'
import type { Tag } from '../data/timeline'

const TAG_INFO: Record<Tag, { label: string; color: string; emoji: string }> = {
  protocol: { label: 'Protocol', color: '#8B5CF6', emoji: '⛓️' },
  scaling: { label: 'Scaling', color: '#3B82F6', emoji: '📈' },
  defi: { label: 'DeFi', color: '#10B981', emoji: '💰' },
  nft: { label: 'NFT', color: '#F59E0B', emoji: '🖼️' },
  social: { label: 'Social', color: '#EC4899', emoji: '💬' },
  research: { label: 'Research', color: '#6366F1', emoji: '🔬' },
  security: { label: 'Security', color: '#EF4444', emoji: '🔒' },
  adoption: { label: 'Adoption', color: '#059669', emoji: '🏛️' },
  tvl: { label: 'TVL', color: '#14B8A6', emoji: '📊' },
  blobs: { label: 'Blobs', color: '#06B6D4', emoji: '🫧' },
}

const PRESETS: Record<string, { name: string; tags: Tag[] }> = {
  all: { name: 'Show Everything', tags: ['protocol', 'scaling', 'defi', 'nft', 'social', 'research', 'security', 'adoption', 'tvl', 'blobs'] },
  protocol: { name: 'Protocol Deep Dive', tags: ['protocol', 'scaling', 'research', 'blobs'] },
  defi: { name: 'DeFi Journey', tags: ['defi', 'nft', 'adoption', 'tvl'] },
  highlights: { name: 'Key Moments', tags: ['protocol', 'defi', 'social', 'adoption', 'tvl', 'blobs'] },
}

interface TagFilterProps {
  activeTags: Tag[]
  onTagsChange: (tags: Tag[]) => void
  totalEvents: number
  filteredCount: number
}

export function TagFilter({ activeTags, onTagsChange, totalEvents, filteredCount }: TagFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const toggleTag = (tag: Tag) => {
    if (activeTags.includes(tag)) {
      onTagsChange(activeTags.filter(t => t !== tag))
    } else {
      onTagsChange([...activeTags, tag])
    }
  }

  const applyPreset = (presetKey: string) => {
    onTagsChange(PRESETS[presetKey].tags)
  }

  const allTags = Object.keys(TAG_INFO) as Tag[]
  const allActive = activeTags.length === allTags.length
  const isFiltered = !allActive

  return (
    <div className="relative" ref={panelRef}>
      {/* Popout Panel */}
      {isOpen && (
        <div className="absolute bottom-14 left-0 w-72 bg-[var(--bg-secondary)] rounded-xl border border-[var(--bg-tertiary)] shadow-xl overflow-hidden animate-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="px-4 py-3 border-b border-[var(--bg-tertiary)] flex items-center justify-between">
            <span className="font-medium text-[var(--text-primary)]">Filter Timeline</span>
            {isFiltered && (
              <span className="text-xs bg-[var(--eth-purple)] text-white px-2 py-0.5 rounded-full">
                {filteredCount}/{totalEvents}
              </span>
            )}
          </div>

          <div className="px-4 pb-4">
            {/* Presets */}
            <div className="py-3 border-b border-[var(--bg-tertiary)]">
              <div className="text-xs text-[var(--text-muted)] mb-2">Quick Presets</div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(PRESETS).map(([key, preset]) => (
                  <button
                    key={key}
                    onClick={() => applyPreset(key)}
                    className={`
                      px-3 py-1.5 rounded-lg text-sm transition-colors
                      ${JSON.stringify(activeTags.sort()) === JSON.stringify(preset.tags.sort())
                        ? 'bg-[var(--eth-purple)] text-white'
                        : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-primary)]'
                      }
                    `}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Individual Tags */}
            <div className="pt-3">
              <div className="text-xs text-[var(--text-muted)] mb-2">Categories</div>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => {
                  const info = TAG_INFO[tag]
                  const isActive = activeTags.includes(tag)
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`
                        px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 transition-all
                        ${isActive
                          ? 'ring-2 ring-offset-2 ring-offset-[var(--bg-secondary)]'
                          : 'opacity-50 hover:opacity-75'
                        }
                      `}
                      style={{
                        backgroundColor: isActive ? info.color + '30' : 'var(--bg-tertiary)',
                        color: isActive ? info.color : 'var(--text-muted)',
                        // @ts-expect-error CSS custom property for ring color
                        '--tw-ring-color': isActive ? info.color : 'transparent',
                      }}
                    >
                      <span>{info.emoji}</span>
                      <span>{info.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Clear/Select All */}
            <div className="pt-3 flex gap-2">
              <button
                onClick={() => onTagsChange(allTags)}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
              >
                Select All
              </button>
              <span className="text-[var(--text-muted)]">·</span>
              <button
                onClick={() => onTagsChange([])}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-lg
          ${isOpen || isFiltered
            ? 'bg-[var(--eth-purple)] text-white' 
            : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]'
          }
        `}
        title="Filter timeline events"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        {/* Badge showing active filter count */}
        {isFiltered && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {activeTags.length}
          </span>
        )}
      </button>
    </div>
  )
}

export { TAG_INFO, PRESETS }
export type { Tag }
