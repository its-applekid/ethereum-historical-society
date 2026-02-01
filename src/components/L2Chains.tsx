import { useMemo } from 'react'

interface ChainBranch {
  id: string
  name: string
  /** Block where this branch starts (tied to a milestone) */
  startBlock: number
  /** Color for this chain's line */
  color: string
  /** Base opacity - older chains get lower base opacity */
  baseOpacity: number
  /** Shimmer animation style */
  shimmerStyle: 'slow' | 'medium' | 'fast' | 'pulse' | 'wave'
  /** Horizontal offset direction: -1 = left, 1 = right */
  side: -1 | 1
  /** Description for the milestone this branches from */
  milestone: string
}

// All branching chains - intentionally tied to specific milestones
const CHAIN_BRANCHES: ChainBranch[] = [
  // ETC is now handled specially - runs from DAO Fork to The Merge
  
  // ======== FAILED SCALING ATTEMPTS (faded) ========
  {
    id: 'plasma',
    name: 'Plasma',
    startBlock: 4_370_000, // ~Byzantium era when Plasma was announced
    color: '#666666',
    baseOpacity: 0.08, // Very faded - abandoned
    shimmerStyle: 'slow',
    side: 1,
    milestone: 'Plasma Whitepaper',
  },
  {
    id: 'raiden',
    name: 'Raiden',
    startBlock: 4_700_000, // ~Late 2017
    color: '#555555',
    baseOpacity: 0.06, // Even more faded - eclipsed by rollups
    shimmerStyle: 'slow',
    side: -1,
    milestone: 'Raiden Network',
  },
  
  // ======== ACTIVE L2s (more visible, newer = brighter) ========
  {
    id: 'optimism',
    name: 'OP Mainnet',
    startBlock: 12_686_786, // Optimism Alpha Launch
    color: '#FF0420', // Optimism red
    baseOpacity: 0.35,
    shimmerStyle: 'medium',
    side: -1,
    milestone: 'Optimism Mainnet Alpha',
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum',
    startBlock: 13_133_428, // Arbitrum One Launch
    color: '#28A0F0', // Arbitrum blue
    baseOpacity: 0.4,
    shimmerStyle: 'fast',
    side: 1,
    milestone: 'Arbitrum One Launch',
  },
  {
    id: 'zksync',
    name: 'zkSync Era',
    startBlock: 16_890_000, // ~March 2023
    color: '#4E529A', // zkSync purple
    baseOpacity: 0.3,
    shimmerStyle: 'pulse',
    side: -1,
    milestone: 'zkSync Era Launch',
  },
  {
    id: 'linea',
    name: 'Linea',
    startBlock: 17_720_000, // ~July 2023
    color: '#61DFFF', // Linea cyan
    baseOpacity: 0.25,
    shimmerStyle: 'wave',
    side: 1,
    milestone: 'Linea Launch',
  },
  {
    id: 'base',
    name: 'Base',
    startBlock: 17_880_000, // Base Launch August 2023
    color: '#0052FF', // Coinbase blue
    baseOpacity: 0.45, // Brighter - very active
    shimmerStyle: 'fast',
    side: -1,
    milestone: 'Base Mainnet Launch',
  },
  {
    id: 'scroll',
    name: 'Scroll',
    startBlock: 18_400_000, // ~October 2023
    color: '#FFEEDA', // Scroll cream
    baseOpacity: 0.25,
    shimmerStyle: 'wave',
    side: 1,
    milestone: 'Scroll Launch',
  },
]

// Hard forks - short branches that curve off and fade (the "old chain" that died)
const HARD_FORKS = [
  { id: 'homestead', block: 1_150_000, name: 'Homestead' },
  // DAO fork is special - ETC persisted, so it's in CHAIN_BRANCHES instead
  { id: 'byzantium', block: 4_370_000, name: 'Byzantium' },
  { id: 'constantinople', block: 7_280_000, name: 'Constantinople' },
  { id: 'istanbul', block: 9_069_000, name: 'Istanbul' },
  { id: 'muir-glacier', block: 9_200_000, name: 'Muir Glacier' },
  { id: 'berlin', block: 12_244_000, name: 'Berlin' },
  { id: 'london', block: 12_965_000, name: 'London' },
  { id: 'arrow-glacier', block: 13_773_000, name: 'Arrow Glacier' },
  { id: 'gray-glacier', block: 15_050_000, name: 'Gray Glacier' },
  // The Merge is special - handled separately
  { id: 'shapella', block: 17_034_870, name: 'Shapella' },
  { id: 'dencun', block: 19_426_587, name: 'Dencun' },
]

// Special chains that don't follow normal branch pattern
const BEACON_CHAIN = {
  id: 'beacon',
  name: 'Beacon Chain',
  startBlock: 11_052_984, // Beacon Chain genesis - Dec 1, 2020
  mergeBlock: 15_537_394, // The Merge - Sept 15, 2022
  color: '#FF6B35', // Beacon orange
  baseOpacity: 0.55, // More solid than L2s
}

// Ethereum Classic - the DAO fork chain that runs parallel until The Merge
const ETC_CHAIN = {
  id: 'etc',
  name: 'Ethereum Classic',
  startBlock: 1_920_000, // The DAO Fork
  endBlock: 15_537_394, // Runs until The Merge (symbolic ending)
  color: '#34D399', // Green
  baseOpacity: 0.2,
}

// Current approximate block (Jan 2026)
const CURRENT_BLOCK = 23_500_000

interface L2ChainsProps {
  /** Current scroll position (0-1) representing timeline progress */
  progress: number
}

/**
 * Renders chain branches in the background
 * Lines appear as their milestone block is reached based on scroll progress
 * Each chain has unique shimmer effects and fades based on age
 */
export function L2Chains({ progress }: L2ChainsProps) {
  // Convert block number to progress (0-1)
  const blockToProgress = (block: number): number => {
    return block / CURRENT_BLOCK
  }

  const visibleChains = useMemo(() => {
    return CHAIN_BRANCHES.filter(chain => {
      const chainProgress = blockToProgress(chain.startBlock)
      return progress >= chainProgress
    }).map(chain => {
      const startProgress = blockToProgress(chain.startBlock)
      // Fade in smoothly as we pass the milestone
      const fadeIn = Math.min(1, (progress - startProgress) * 5)
      
      // Boost opacity as we approach the end (rainbow effect buildup)
      // At progress 0.7+, start increasing vibrancy
      const endBoost = progress > 0.7 ? 1 + (progress - 0.7) * 1.5 : 1
      
      return {
        ...chain,
        startProgress,
        currentOpacity: Math.min(0.8, chain.baseOpacity * fadeIn * endBoost),
      }
    })
  }, [progress])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* CSS for shimmer animations */}
      <style>{`
        @keyframes shimmer-slow {
          0%, 100% { opacity: var(--base-opacity); }
          50% { opacity: calc(var(--base-opacity) * 1.3); }
        }
        @keyframes shimmer-medium {
          0%, 100% { opacity: var(--base-opacity); }
          50% { opacity: calc(var(--base-opacity) * 1.5); }
        }
        @keyframes shimmer-fast {
          0%, 100% { opacity: var(--base-opacity); }
          50% { opacity: calc(var(--base-opacity) * 1.6); }
        }
        @keyframes shimmer-pulse {
          0%, 100% { opacity: var(--base-opacity); filter: blur(0.5px); }
          25% { opacity: calc(var(--base-opacity) * 1.4); filter: blur(0px); }
          75% { opacity: calc(var(--base-opacity) * 0.8); filter: blur(1px); }
        }
        @keyframes shimmer-wave {
          0% { opacity: var(--base-opacity); transform: translateX(0); }
          25% { opacity: calc(var(--base-opacity) * 1.3); transform: translateX(1px); }
          50% { opacity: var(--base-opacity); transform: translateX(0); }
          75% { opacity: calc(var(--base-opacity) * 1.3); transform: translateX(-1px); }
          100% { opacity: var(--base-opacity); transform: translateX(0); }
        }
        .shimmer-slow { animation: shimmer-slow 8s ease-in-out infinite; }
        .shimmer-medium { animation: shimmer-medium 4s ease-in-out infinite; }
        .shimmer-fast { animation: shimmer-fast 2s ease-in-out infinite; }
        .shimmer-pulse { animation: shimmer-pulse 3s ease-in-out infinite; }
        .shimmer-wave { animation: shimmer-wave 5s ease-in-out infinite; }
      `}</style>

      {/* CSS for main line live shimmer */}
      <style>{`
        @keyframes live-pulse {
          0%, 100% { 
            opacity: 1;
            box-shadow: 0 0 8px var(--eth-purple), 0 0 16px var(--eth-purple);
          }
          50% { 
            opacity: 0.85;
            box-shadow: 0 0 15px var(--eth-purple), 0 0 30px var(--eth-purple-light);
          }
        }
        .live-line-shimmer {
          animation: live-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Main Ethereum line (center) - hidden, using Timeline spine instead */}
      {/* Line removed - the Timeline.tsx spine handles the center line */}
      
      {/* Main line live section - shimmers at the end where live blocks appear */}
      {progress > 0.85 && (
        <div 
          className="absolute left-1/2 w-1 live-line-shimmer"
          style={{ 
            top: '92%',
            height: '8%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to bottom, var(--eth-purple-light), var(--eth-purple))',
            borderRadius: '2px',
          }}
        />
      )}

      {/* Beacon Chain - runs parallel then merges into mainline */}
      {progress >= blockToProgress(BEACON_CHAIN.startBlock) && (() => {
        const beaconStart = blockToProgress(BEACON_CHAIN.startBlock)
        const mergePoint = blockToProgress(BEACON_CHAIN.mergeBlock)
        const beaconOffset = 40 // pixels to the right of center
        const hasMerged = progress >= mergePoint
        const fadeIn = Math.min(1, (progress - beaconStart) * 3)
        const currentOpacity = BEACON_CHAIN.baseOpacity * fadeIn
        
        // Height of the straight portion (before merge curve)
        const straightHeight = hasMerged 
          ? (mergePoint - beaconStart) * 100 
          : (progress - beaconStart) * 100
        
        return (
          <>
            {/* Beacon Chain label */}
            <span 
              className="absolute whitespace-nowrap font-mono"
              style={{ 
                left: `calc(50% + ${beaconOffset + 8}px)`,
                top: `${beaconStart * 100 + 0.5}%`,
                color: BEACON_CHAIN.color,
                opacity: currentOpacity * 1.2,
                fontSize: '10px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Beacon Chain
            </span>
            
            {/* Straight vertical portion of Beacon Chain */}
            <div
              className="absolute shimmer-medium"
              style={{
                '--base-opacity': currentOpacity,
                left: `calc(50% + ${beaconOffset}px)`,
                top: `${beaconStart * 100}%`,
                height: `${straightHeight}%`,
                width: '3px', // Slightly thicker than L2 lines
                background: `linear-gradient(to bottom, transparent 0%, ${BEACON_CHAIN.color} 2%, ${BEACON_CHAIN.color} 100%)`,
                opacity: currentOpacity,
                borderRadius: '1px',
              } as React.CSSProperties}
            />
            
            {/* Connector from main line to Beacon Chain start */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: `${beaconStart * 100}%`,
                width: `${beaconOffset}px`,
                height: '2px',
                background: `linear-gradient(to right, ${BEACON_CHAIN.color}60, ${BEACON_CHAIN.color})`,
                opacity: currentOpacity * 0.7,
              }}
            />
            
            {/* The Merge curve - SVG for smooth curve back to mainline */}
            {hasMerged && (
              <svg
                className="absolute pointer-events-none"
                style={{
                  left: '50%',
                  top: `${mergePoint * 100}%`,
                  transform: 'translateY(-2px)',
                  overflow: 'visible',
                }}
                width={beaconOffset + 10}
                height="60"
              >
                {/* Curved path from Beacon Chain back to mainline */}
                <path
                  d={`M ${beaconOffset} 0 Q ${beaconOffset} 30 0 50`}
                  fill="none"
                  stroke={BEACON_CHAIN.color}
                  strokeWidth="3"
                  opacity={currentOpacity}
                  strokeLinecap="round"
                />
                {/* Glow effect on the curve */}
                <path
                  d={`M ${beaconOffset} 0 Q ${beaconOffset} 30 0 50`}
                  fill="none"
                  stroke={BEACON_CHAIN.color}
                  strokeWidth="8"
                  opacity={currentOpacity * 0.3}
                  strokeLinecap="round"
                  filter="blur(4px)"
                />
              </svg>
            )}
            
            {/* Beacon Chain genesis marker */}
            <div
              className="absolute"
              style={{
                left: `calc(50% + ${beaconOffset - 3}px)`,
                top: `${beaconStart * 100}%`,
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: BEACON_CHAIN.color,
                opacity: currentOpacity,
                boxShadow: `0 0 10px ${BEACON_CHAIN.color}80`,
              }}
            />
          </>
        )
      })()}

      {/* Ethereum Classic - runs from DAO Fork to The Merge, then curves into mainline */}
      {progress >= blockToProgress(ETC_CHAIN.startBlock) && (() => {
        const etcStart = blockToProgress(ETC_CHAIN.startBlock)
        const etcEnd = blockToProgress(ETC_CHAIN.endBlock)
        const etcOffset = -35 // pixels to the left of center
        const hasEnded = progress >= etcEnd
        const fadeIn = Math.min(1, (progress - etcStart) * 3)
        const currentOpacity = ETC_CHAIN.baseOpacity * fadeIn
        
        // Height of the straight portion (before end curve)
        const straightHeight = hasEnded 
          ? (etcEnd - etcStart) * 100 
          : (progress - etcStart) * 100
        
        return (
          <>
            {/* ETC label */}
            <span 
              className="absolute whitespace-nowrap font-mono"
              style={{ 
                left: `calc(50% + ${etcOffset - 60}px)`,
                top: `${etcStart * 100 + 0.5}%`,
                color: ETC_CHAIN.color,
                opacity: currentOpacity * 1.2,
                fontSize: '10px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Ethereum Classic
            </span>
            
            {/* Straight vertical portion of ETC */}
            <div
              className="absolute shimmer-slow"
              style={{
                '--base-opacity': currentOpacity,
                left: `calc(50% + ${etcOffset}px)`,
                top: `${etcStart * 100}%`,
                height: `${straightHeight}%`,
                width: '2px',
                background: `linear-gradient(to bottom, ${ETC_CHAIN.color} 0%, ${ETC_CHAIN.color} 100%)`,
                opacity: currentOpacity,
                borderRadius: '1px',
              } as React.CSSProperties}
            />
            
            {/* Connector from main line to ETC start */}
            <div
              style={{
                position: 'absolute',
                left: `calc(50% + ${etcOffset}px)`,
                top: `${etcStart * 100}%`,
                width: `${-etcOffset}px`,
                height: '2px',
                background: `linear-gradient(to right, ${ETC_CHAIN.color}, ${ETC_CHAIN.color}60)`,
                opacity: currentOpacity * 0.7,
              }}
            />
            
            {/* The curve back to mainline at The Merge */}
            {hasEnded && (
              <svg
                className="absolute pointer-events-none"
                style={{
                  left: `calc(50% + ${etcOffset}px)`,
                  top: `${etcEnd * 100}%`,
                  transform: 'translateY(-2px)',
                  overflow: 'visible',
                }}
                width={-etcOffset + 10}
                height="60"
              >
                {/* Curved path from ETC back to mainline */}
                <path
                  d={`M 0 0 Q 0 30 ${-etcOffset} 50`}
                  fill="none"
                  stroke={ETC_CHAIN.color}
                  strokeWidth="2"
                  opacity={currentOpacity}
                  strokeLinecap="round"
                />
                {/* Glow effect on the curve */}
                <path
                  d={`M 0 0 Q 0 30 ${-etcOffset} 50`}
                  fill="none"
                  stroke={ETC_CHAIN.color}
                  strokeWidth="6"
                  opacity={currentOpacity * 0.3}
                  strokeLinecap="round"
                  filter="blur(3px)"
                />
              </svg>
            )}
            
            {/* ETC fork origin marker */}
            <div
              className="absolute"
              style={{
                left: `calc(50% + ${etcOffset - 3}px)`,
                top: `${etcStart * 100}%`,
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: ETC_CHAIN.color,
                opacity: currentOpacity,
                boxShadow: `0 0 8px ${ETC_CHAIN.color}60`,
              }}
            />
          </>
        )
      })()}

      {/* Hard fork ghost branches - short curves that fade out */}
      {HARD_FORKS.map((fork, index) => {
        const forkProgress = blockToProgress(fork.block)
        if (progress < forkProgress) return null
        
        // Alternate sides for visual variety
        const side = index % 2 === 0 ? -1 : 1
        const offset = 20 + (index % 3) * 8 // Slight variation in offset
        
        // Fade in as we pass the fork, stays visible but subtle
        const fadeIn = Math.min(1, (progress - forkProgress) * 8)
        const opacity = 0.15 * fadeIn
        
        return (
          <svg
            key={fork.id}
            className="absolute pointer-events-none"
            style={{
              left: '50%',
              top: `${forkProgress * 100}%`,
              transform: `translateX(${side === -1 ? `-${offset + 30}px` : '0'})`,
              overflow: 'visible',
            }}
            width={offset + 30}
            height="50"
          >
            {/* Ghost branch that curves away and fades */}
            <path
              d={side === 1 
                ? `M 0 0 Q ${offset} 15 ${offset + 25} 40`
                : `M ${offset + 30} 0 Q ${30} 15 5 40`
              }
              fill="none"
              stroke="var(--eth-purple)"
              strokeWidth="2"
              opacity={opacity}
              strokeLinecap="round"
              strokeDasharray="4 3"
              style={{
                filter: 'blur(0.5px)',
              }}
            />
            {/* Fading end */}
            <circle
              cx={side === 1 ? offset + 25 : 5}
              cy="40"
              r="3"
              fill="var(--eth-purple)"
              opacity={opacity * 0.5}
              style={{
                filter: 'blur(2px)',
              }}
            />
          </svg>
        )
      })}

      {/* Chain branch lines - originate spread across the width */}
      {visibleChains.map((chain, index) => {
        // Spread origin circles across the width (15% to 85%)
        // This creates a visual effect of many lines spreading out by the bottom
        const totalChains = CHAIN_BRANCHES.length
        const spreadRange = 70 // percentage width to spread across
        const startX = 15 // start from 15% from left
        // Distribute evenly + some variation based on chain properties
        const basePosition = startX + (index / totalChains) * spreadRange
        const variation = (chain.side === 1 ? 5 : -5) + ((index * 7) % 10) - 5
        const xPosition = Math.max(12, Math.min(88, basePosition + variation))
        
        return (
          <div key={chain.id} className="absolute" style={{ left: 0, top: 0, right: 0, bottom: 0 }}>
            {/* Origin circle at bottom of content pane */}
            <div
              className={`absolute shimmer-${chain.shimmerStyle}`}
              style={{
                '--base-opacity': chain.currentOpacity,
                left: `${xPosition}%`,
                top: `${chain.startProgress * 100}%`,
                transform: 'translate(-50%, -50%)',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: chain.color,
                opacity: chain.currentOpacity,
                boxShadow: `0 0 6px ${chain.color}60`,
              } as React.CSSProperties}
            />
            
            {/* Chain name label - next to origin circle */}
            <span 
              className="absolute whitespace-nowrap font-mono"
              style={{ 
                left: `${xPosition + 1.5}%`,
                top: `${chain.startProgress * 100}%`,
                transform: 'translateY(-50%)',
                color: chain.color,
                opacity: Math.min(0.7, chain.currentOpacity * 2),
                fontSize: '9px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              {chain.name}
            </span>
            
            {/* Vertical line extending down from origin */}
            <div
              className={`absolute shimmer-${chain.shimmerStyle}`}
              style={{
                '--base-opacity': chain.currentOpacity,
                left: `${xPosition}%`,
                top: `${chain.startProgress * 100}%`,
                transform: 'translateX(-50%)',
                height: `${(1 - chain.startProgress) * 100}%`,
                width: progress > 0.8 ? '3px' : '2px',
                background: `linear-gradient(to bottom, ${chain.color} 0%, ${chain.color} 100%)`,
                opacity: chain.currentOpacity,
                filter: 'blur(0.5px)',
                boxShadow: progress > 0.8 ? `0 0 ${8 * (progress - 0.8) * 5}px ${chain.color}40` : 'none',
              } as React.CSSProperties}
            />
          </div>
        )
      })}

      {/* The Merge glow effect */}
      {progress >= blockToProgress(15_537_394) && (
        <div
          className="absolute animate-pulse"
          style={{
            left: 'calc(50% - 6px)',
            top: `${blockToProgress(15_537_394) * 100}%`,
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,211,149,0.9) 0%, transparent 70%)',
            boxShadow: '0 0 20px rgba(0,211,149,0.6)',
          }}
        />
      )}

      {/* Dencun blob milestone */}
      {progress >= blockToProgress(19_426_587) && (
        <div
          className="absolute animate-pulse"
          style={{
            left: 'calc(50% - 4px)',
            top: `${blockToProgress(19_426_587) * 100}%`,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.8) 0%, transparent 70%)',
            boxShadow: '0 0 15px rgba(6,182,212,0.5)',
          }}
        />
      )}

      {/* Blob bubbles - appear after Dencun, float between L2 lines */}
      <style>{`
        @keyframes blob-float {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: var(--blob-opacity);
          }
          50% { 
            transform: translateY(-15px) scale(1.1);
            opacity: calc(var(--blob-opacity) * 1.3);
          }
        }
        @keyframes blob-wobble {
          0%, 100% { border-radius: 60% 40% 55% 45% / 55% 45% 50% 50%; }
          25% { border-radius: 45% 55% 45% 55% / 50% 55% 45% 50%; }
          50% { border-radius: 55% 45% 50% 50% / 45% 50% 55% 50%; }
          75% { border-radius: 50% 50% 45% 55% / 55% 45% 50% 55%; }
        }
        .blob-bubble {
          animation: blob-float 4s ease-in-out infinite, blob-wobble 8s ease-in-out infinite;
        }
      `}</style>
      
      {progress >= blockToProgress(19_426_587) && (() => {
        const dencunProgress = blockToProgress(19_426_587)
        const blobIntensity = Math.min(1, (progress - dencunProgress) * 3)
        
        // Generate blob positions - spread across width, only in post-Dencun section
        const blobs = [
          { id: 1, x: 20, y: 85, size: 12, delay: 0, opacity: 0.25 },
          { id: 2, x: 35, y: 88, size: 8, delay: 0.5, opacity: 0.2 },
          { id: 3, x: 55, y: 83, size: 15, delay: 1, opacity: 0.3 },
          { id: 4, x: 70, y: 90, size: 10, delay: 1.5, opacity: 0.22 },
          { id: 5, x: 80, y: 86, size: 9, delay: 2, opacity: 0.18 },
          { id: 6, x: 25, y: 92, size: 14, delay: 2.5, opacity: 0.28 },
          { id: 7, x: 45, y: 95, size: 11, delay: 3, opacity: 0.24 },
          { id: 8, x: 65, y: 93, size: 7, delay: 3.5, opacity: 0.15 },
          { id: 9, x: 15, y: 89, size: 13, delay: 4, opacity: 0.26 },
          { id: 10, x: 75, y: 84, size: 10, delay: 4.5, opacity: 0.2 },
        ]
        
        return blobs.map(blob => (
          <div
            key={blob.id}
            className="blob-bubble absolute"
            style={{
              '--blob-opacity': blob.opacity * blobIntensity,
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              background: 'radial-gradient(ellipse at 30% 30%, rgba(45, 212, 191, 0.6) 0%, rgba(6, 182, 212, 0.3) 50%, rgba(6, 182, 212, 0.1) 100%)',
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.3), inset 0 0 5px rgba(255,255,255,0.2)',
              animationDelay: `${blob.delay}s, ${blob.delay * 0.7}s`,
              opacity: blob.opacity * blobIntensity,
            } as React.CSSProperties}
          />
        ))
      })()}
    </div>
  )
}
