import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Timeline } from '../components/Timeline'
import { DetailPanel } from '../components/DetailPanel'
import { L2Chains } from '../components/L2Chains'
import type { AudioPlayerRef } from '../components/AudioPlayer'
import type { AutoPlayRef } from '../components/AutoPlay'
import { ControlStack } from '../components/ControlStack'
import { LiveBlockFeed } from '../components/LiveBlockFeed'
import { FutureHistory } from '../components/FutureHistory'
import { EthereumLogo3D } from '../components/EthereumLogo3D'
import { TIMELINE_DATA } from '../data/timeline'
import type { TimelineNode, Tag } from '../data/timeline'

// All available tags
const ALL_TAGS: Tag[] = ['protocol', 'scaling', 'defi', 'nft', 'social', 'research', 'security', 'adoption', 'tvl', 'blobs']

export function TimelinePage() {
  const [selectedNode, setSelectedNode] = useState<TimelineNode | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeTags, setActiveTags] = useState<Tag[]>(ALL_TAGS)
  const timelineRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<AudioPlayerRef>(null)
  const autoPlayRef = useRef<AutoPlayRef>(null)

  // Handle URL hash for deep linking to events
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        const node = TIMELINE_DATA.find(n => n.id === hash)
        if (node) {
          setSelectedNode(node)
          setTimeout(() => {
            const element = document.getElementById(`event-${hash}`)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          }, 100)
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleSelectNode = useCallback((node: TimelineNode | null) => {
    setSelectedNode(node)
    if (node) {
      window.history.replaceState(null, '', `#${node.id}`)
    } else {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [])

  const filteredNodes = useMemo(() => {
    if (activeTags.length === 0) return []
    if (activeTags.length === ALL_TAGS.length) return TIMELINE_DATA
    return TIMELINE_DATA.filter(node => {
      if (!node.tags || node.tags.length === 0) return false
      return node.tags.some(tag => activeTags.includes(tag))
    })
  }, [activeTags])

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = Math.min(1, Math.max(0, scrollTop / docHeight))
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <EthereumLogo3D />
      
      <ControlStack
        audioRef={audioRef}
        autoPlayRef={autoPlayRef}
        activeTags={activeTags}
        onTagsChange={setActiveTags}
        totalEvents={TIMELINE_DATA.length}
        filteredCount={filteredNodes.length}
      />
      
      <main className="relative" ref={timelineRef}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <L2Chains progress={scrollProgress} />
        </div>

        <section className="flex flex-col items-center justify-center min-h-[60vh] px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--eth-purple)] to-[var(--eth-purple-light)] bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 8px var(--bg-primary)) drop-shadow(0 0 16px var(--bg-primary)) drop-shadow(0 0 24px var(--bg-primary))'
              }}
            >
              The Ethereum Archive
            </h1>
            <p 
              className="text-xl md:text-2xl text-[var(--text-primary)] mb-8"
              style={{
                textShadow: '0 0 8px var(--bg-primary), 0 0 16px var(--bg-primary), 0 0 24px var(--bg-primary), 0 0 32px var(--bg-primary)'
              }}
            >
              A complete history of Ethereum's evolution from genesis to the present
            </p>
            
            <div className="flex items-center justify-center gap-2 text-[var(--text-muted)]">
              <span>Scroll through history</span>
              <svg 
                className="w-5 h-5 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </section>

        <Timeline 
          nodes={filteredNodes} 
          onSelectNode={handleSelectNode}
          selectedNodeId={selectedNode?.id}
        />

        <section className="px-8 py-12 relative z-10">
          <div className="max-w-2xl mx-auto">
            <LiveBlockFeed />
          </div>
        </section>

        <section className="px-8 py-12 relative z-10">
          <div className="max-w-2xl mx-auto">
            <FutureHistory />
          </div>
        </section>
      </main>

      <DetailPanel node={selectedNode} onClose={() => handleSelectNode(null)} />
    </>
  )
}
