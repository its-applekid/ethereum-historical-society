import { useEffect, useState } from 'react'

interface GasLimitData {
  block: number
  gasLimit: number
  date: string
  description: string
}

// Historical gas limit milestones
const gasLimitHistory: GasLimitData[] = [
  { block: 0, gasLimit: 5000, date: '2015-07-30', description: 'Genesis' },
  { block: 200000, gasLimit: 5000, date: '2015-09-07', description: 'Frontier Thawing' },
  { block: 1150000, gasLimit: 4712388, date: '2016-03-14', description: 'Homestead' },
  { block: 2463000, gasLimit: 4712388, date: '2016-10-18', description: 'Tangerine Whistle' },
  { block: 2675000, gasLimit: 4712388, date: '2016-11-22', description: 'Spurious Dragon' },
  { block: 4370000, gasLimit: 8000000, date: '2017-10-16', description: 'Byzantium' },
  { block: 7280000, gasLimit: 8000000, date: '2019-02-28', description: 'Constantinople' },
  { block: 9069000, gasLimit: 10000000, date: '2019-12-08', description: 'Istanbul' },
  { block: 9200000, gasLimit: 10000000, date: '2019-12-31', description: 'Muir Glacier' },
  { block: 12244000, gasLimit: 15000000, date: '2021-04-15', description: 'Berlin' },
  { block: 12965000, gasLimit: 15000000, date: '2021-08-05', description: 'London' },
  { block: 13773000, gasLimit: 15000000, date: '2021-12-09', description: 'Arrow Glacier' },
  { block: 15050000, gasLimit: 15000000, date: '2022-06-30', description: 'Gray Glacier' },
  { block: 15537394, gasLimit: 30000000, date: '2022-09-15', description: 'The Merge' },
  { block: 17034870, gasLimit: 30000000, date: '2023-04-12', description: 'Shanghai' },
  { block: 19426587, gasLimit: 30000000, date: '2024-03-13', description: 'Dencun' },
]

export function GasLimitBand() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate band width based on scroll progress
  // Map scroll progress to gas limit history
  const currentIndex = Math.floor(scrollProgress * (gasLimitHistory.length - 1))
  const nextIndex = Math.min(currentIndex + 1, gasLimitHistory.length - 1)
  const segmentProgress = (scrollProgress * (gasLimitHistory.length - 1)) - currentIndex

  const currentData = gasLimitHistory[currentIndex]
  const nextData = gasLimitHistory[nextIndex]

  // Interpolate gas limit
  const currentGasLimit = currentData.gasLimit + (nextData.gasLimit - currentData.gasLimit) * segmentProgress

  // Map gas limit to visual width (logarithmic scale for better visualization)
  const minGasLimit = 5000
  const maxGasLimit = 30000000
  const normalizedWidth = (Math.log(currentGasLimit) - Math.log(minGasLimit)) / (Math.log(maxGasLimit) - Math.log(minGasLimit))
  const bandWidth = 2 + normalizedWidth * 18 // 2px to 20px

  return (
    <div className="fixed left-12 top-0 bottom-0 pointer-events-none z-[1]">
      {/* Gas limit band - vertical expanding line */}
      <div
        className="absolute top-0 bottom-0 bg-gradient-to-r from-transparent via-[var(--eth-purple)]/20 to-transparent transition-all duration-300 ease-out"
        style={{
          width: `${bandWidth}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          boxShadow: `0 0 ${bandWidth * 2}px rgba(99, 102, 241, 0.3)`,
        }}
      />
      
      {/* Milestone markers at key gas limit increases */}
      {gasLimitHistory.map((milestone, index) => {
        const position = (index / (gasLimitHistory.length - 1)) * 100
        const isVisible = scrollProgress * 100 >= position - 5 // Show when near
        
        return (
          <div
            key={milestone.block}
            className={`absolute left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ top: `${position}%` }}
          >
            <div className="w-3 h-3 rounded-full bg-[var(--eth-purple)] ring-2 ring-[var(--bg-primary)]" />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs text-[var(--text-tertiary)]">
              {(milestone.gasLimit / 1000000).toFixed(1)}M gas
            </div>
          </div>
        )
      })}
    </div>
  )
}
