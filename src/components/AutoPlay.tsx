import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'

interface AutoPlayProps {
  /** Scroll speed in pixels per second */
  speed?: number
}

export interface AutoPlayRef {
  play: () => void
  pause: () => void
  toggle: () => void
}

export const AutoPlay = forwardRef<AutoPlayRef, AutoPlayProps>(({ speed = 50 }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false)
  
  useImperativeHandle(ref, () => ({
    play: () => setIsPlaying(true),
    pause: () => setIsPlaying(false),
    toggle: () => setIsPlaying(prev => !prev),
  }))
  const animationRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number | null>(null)

  // Animation loop - simple constant scroll
  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
      lastTimeRef.current = null
      return
    }

    const animate = (timestamp: number) => {
      // First frame - just record time, don't scroll
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const delta = timestamp - lastTimeRef.current
      lastTimeRef.current = timestamp

      // Calculate pixels to scroll based on time elapsed
      const pixelsToScroll = (speed * delta) / 1000

      // Check if we've reached the bottom
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY

      if (currentScroll >= maxScroll - 10) {
        // Reached the end
        setIsPlaying(false)
        return
      }

      // Scroll down
      window.scrollBy(0, pixelsToScroll)

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, speed])

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev)
  }

  return (
    <div className="relative">
      <button
        onClick={handlePlayPause}
        className={`
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-lg
          ${isPlaying 
            ? 'bg-[var(--eth-purple)] text-white' 
            : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]'
          }
        `}
        title={isPlaying ? 'Pause auto-scroll' : 'Auto-scroll through history'}
      >
        {isPlaying ? (
          // Pause icon
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          // Play icon
          <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  )
})
