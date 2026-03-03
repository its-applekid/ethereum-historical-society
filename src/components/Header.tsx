import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'

function BurnedCounter() {
  const [burned, setBurned] = useState({ total: 0, perSecond: 0 })
  const [displayBurned, setDisplayBurned] = useState(0)
  
  useEffect(() => {
    // Fetch burned ETH data from ultrasound.money API
    const fetchBurnedData = async () => {
      try {
        const response = await fetch('https://ultrasound.money/api/v2/fees/burned')
        if (!response.ok) throw new Error('API request failed')
        
        const data = await response.json()
        // API returns burned amount in wei, convert to ETH
        const totalBurned = parseFloat(data.totalBurned) / 1e18
        const burnRate = parseFloat(data.burnRate1d) / 86400 // daily rate to per-second
        
        setBurned({ total: totalBurned, perSecond: burnRate })
        setDisplayBurned(totalBurned)
      } catch (error) {
        // Fallback: use approximate values as of Feb 2026
        // EIP-1559 launched Aug 5, 2021 - roughly 4.5 years of burning
        // Approximate 4.5M ETH burned, ~0.03 ETH/sec average
        console.warn('Burned ETH API failed, using approximation:', error)
        setBurned({ total: 4500000, perSecond: 0.03 })
        setDisplayBurned(4500000)
      }
    }
    
    fetchBurnedData()
    const fetchInterval = setInterval(fetchBurnedData, 300000) // Refresh every 5 minutes
    
    return () => clearInterval(fetchInterval)
  }, [])
  
  // Animate the counter - update every 10 seconds to reduce re-renders
  useEffect(() => {
    if (burned.perSecond === 0) return
    
    const interval = setInterval(() => {
      setDisplayBurned(prev => prev + (burned.perSecond * 10))
    }, 10000)
    
    return () => clearInterval(interval)
  }, [burned.perSecond])
  
  const formatBurned = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M`
    }
    return value.toFixed(0)
  }
  
  return (
    <div 
      className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--bg-quaternary)] transform-gpu"
      title="Total ETH burned since EIP-1559 (London fork, August 5, 2021). Burning makes ETH deflationary."
    >
      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
      <span className="text-sm font-medium text-[var(--text-primary)]">
        {formatBurned(displayBurned)} ETH
      </span>
      <span className="text-xs text-[var(--text-muted)]">burned 🔥</span>
    </div>
  )
}

function UptimeCounter() {
  const [uptime, setUptime] = useState({ days: 0, hours: 0, minutes: 0 })
  
  useEffect(() => {
    const genesisTime = new Date('2015-07-30T15:26:13Z').getTime()
    
    const updateUptime = () => {
      const now = Date.now()
      const diff = now - genesisTime
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      
      setUptime({ days, hours, minutes })
    }
    
    updateUptime()
    const interval = setInterval(updateUptime, 60000) // Update every minute
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div 
      className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--bg-quaternary)] transform-gpu"
      title="Ethereum has been running continuously since the genesis block on July 30, 2015"
    >
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-sm font-medium text-[var(--text-primary)]">
        {uptime.days.toLocaleString()} days
      </span>
      <span className="text-xs text-[var(--text-muted)]">uptime</span>
    </div>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-primary)] border-b border-[var(--bg-tertiary)] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between will-change-contents">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--eth-purple)] to-[var(--eth-purple-light)] flex items-center justify-center">
            <span className="text-white font-bold text-sm">Ξ</span>
          </div>
          <span className="font-semibold text-lg">The Ethereum Archive</span>
        </div>
        
        <nav className="flex items-center gap-4 md:gap-6">
          <a 
            href="#timeline" 
            className="hidden md:block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Timeline
          </a>
          <a 
            href="https://eips.ethereum.org" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            EIPs
          </a>
          <a 
            href="https://github.com/its-applekid/ethereum-historical-society" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            GitHub
          </a>
          <BurnedCounter />
          <UptimeCounter />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
