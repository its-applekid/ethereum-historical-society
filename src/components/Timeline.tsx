import { ERA_INFO, getNodesByEra } from '../data/timeline'
import type { TimelineNode, Era } from '../data/timeline'
import { TimelineCard } from './TimelineCard'
import { EraMarker } from './EraMarker'

interface TimelineProps {
  nodes: TimelineNode[]
  onSelectNode: (node: TimelineNode) => void
  selectedNodeId?: string
}

export function Timeline({ nodes, onSelectNode, selectedNodeId }: TimelineProps) {
  const nodesByEra = getNodesByEra(nodes)
  const eras = Object.keys(ERA_INFO) as Era[]

  return (
    <section id="timeline" className="relative py-24">
      {/* Central spine - blurred glow effect */}
      <div 
        id="timeline-spine"
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          top: '18rem',
          bottom: '0',
          width: '4px',
          background: 'linear-gradient(to bottom, transparent 0%, var(--eth-purple) 2%, var(--eth-purple) 95%, transparent)',
          filter: 'blur(8px)',
          opacity: 0.6,
        }}
      />
      {/* Subtle core line for definition */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          top: '18rem',
          bottom: '0',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent 0%, var(--eth-purple) 2%, var(--eth-purple) 95%, transparent)',
          opacity: 0.3,
        }}
      />

      {/* Era sections */}
      {eras.map((era) => {
        const eraNodes = nodesByEra[era] || []
        if (eraNodes.length === 0) return null

        return (
          <div key={era} className="relative mb-16">
            <EraMarker era={era} />
            
            {/* Timeline entries - full width so circles align with spine */}
            {eraNodes.map((node, index) => (
              <TimelineEntry
                key={node.id}
                node={node}
                index={index}
                isSelected={selectedNodeId === node.id}
                onSelect={() => onSelectNode(node)}
              />
            ))}
          </div>
        )
      })}
    </section>
  )
}

interface TimelineEntryProps {
  node: TimelineNode
  index: number
  isSelected: boolean
  onSelect: () => void
}

function TimelineEntry({ node, index, isSelected, onSelect }: TimelineEntryProps) {
  // Cards alternate: even = card left; odd = card right
  const cardOnLeft = index % 2 === 0

  return (
    <div id={`event-${node.id}`} className="relative mb-12">
      {/* Card container - constrained width, centered, with card on left or right side */}
      <div className="max-w-5xl mx-auto px-8">
        <div 
          className={`
            w-[85%] max-w-2xl
            ${cardOnLeft ? 'mr-auto' : 'ml-auto'}
          `}
        >
          <TimelineCard 
            node={node} 
            isSelected={isSelected}
            onClick={onSelect}
          />
        </div>
      </div>

      {/* Node marker circle - straddles top edge of card (half above, half below) */}
      <button
        onClick={onSelect}
        className={`
          absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 z-10
          w-4 h-4 rounded-full border-2 transition-all duration-300
          ${isSelected 
            ? 'bg-[var(--eth-purple)] border-[var(--eth-purple)] scale-150' 
            : 'bg-[var(--bg-primary)] border-[var(--eth-purple)] hover:bg-[var(--eth-purple)] hover:scale-125'
          }
          ${node.importance === 'major' ? 'w-5 h-5' : ''}
        `}
      />
    </div>
  )
}
