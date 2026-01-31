import { useState, useRef, useEffect } from 'react'

interface AudioTrack {
  id: string
  name: string
  artist: string
  url: string
  era?: string // Which era this track fits best
}

// Placeholder tracks - would be replaced with actual licensed music
// Cyberpunk/synthwave aesthetic as mentioned in VISION.md
const TRACKS: AudioTrack[] = [
  {
    id: 'ambient-1',
    name: 'Genesis',
    artist: 'Ambient',
    url: '/audio/genesis.mp3',
    era: 'frontier',
  },
  {
    id: 'synthwave-1',
    name: 'Proof of Work',
    artist: 'Synthwave',
    url: '/audio/pow.mp3',
    era: 'homestead',
  },
  {
    id: 'cyberpunk-1',
    name: 'The Merge',
    artist: 'Cyberpunk Runner',
    url: '/audio/merge.mp3',
    era: 'merge',
  },
]

interface AudioPlayerProps {
  /** Current era for era-appropriate music */
  currentEra?: string
  /** Whether audio is enabled by default */
  autoPlay?: boolean
}

export function AudioPlayer({ currentEra, autoPlay = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [volume, setVolume] = useState(0.3) // Low default volume
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null)
  const [showControls, setShowControls] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Select track based on era
  useEffect(() => {
    const track = TRACKS.find(t => t.era === currentEra) || TRACKS[0]
    if (track !== currentTrack) {
      setCurrentTrack(track)
    }
  }, [currentEra])

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Autoplay blocked - need user interaction
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentTrack])

  // Handle volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value))
  }

  return (
    <div 
      className="fixed bottom-4 left-4 z-50"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Hidden audio element */}
      {currentTrack && (
        <audio
          ref={audioRef}
          src={currentTrack.url}
          loop
          preload="none"
        />
      )}

      {/* Main play button */}
      <button
        onClick={togglePlay}
        className={`
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-300
          ${isPlaying 
            ? 'bg-[var(--eth-purple)] text-white' 
            : 'bg-[var(--bg-secondary)] text-[var(--text-muted)]'
          }
          hover:scale-110 hover:shadow-lg
          border border-[var(--bg-tertiary)]
        `}
        title={isPlaying ? 'Pause music' : 'Play ambient music'}
      >
        {isPlaying ? (
          // Pause icon
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          // Play icon with musical note
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        )}
      </button>

      {/* Expanded controls */}
      {showControls && (
        <div 
          className={`
            absolute bottom-14 left-0 
            bg-[var(--bg-secondary)] rounded-lg p-3
            border border-[var(--bg-tertiary)]
            shadow-xl
            min-w-[180px]
            transition-opacity duration-200
          `}
        >
          {/* Track info */}
          {currentTrack && (
            <div className="mb-3">
              <div className="text-sm font-medium text-[var(--text-primary)]">
                {currentTrack.name}
              </div>
              <div className="text-xs text-[var(--text-muted)]">
                {currentTrack.artist}
              </div>
            </div>
          )}

          {/* Volume slider */}
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--text-muted)]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-1 h-1 rounded-lg appearance-none bg-[var(--bg-tertiary)] cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--eth-purple) ${volume * 100}%, var(--bg-tertiary) ${volume * 100}%)`,
              }}
            />
          </div>

          {/* Track selection (future) */}
          <div className="mt-3 pt-3 border-t border-[var(--bg-tertiary)]">
            <div className="text-xs text-[var(--text-muted)]">
              ♪ Era-adaptive soundtrack
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
