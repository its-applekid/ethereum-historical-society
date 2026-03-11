import { useEffect, useState } from 'react'

interface ValidatorMilestone {
  block: number
  validators: number
  date: string
  description: string
}

// Historical validator count milestones
const validatorMilestones: ValidatorMilestone[] = [
  { block: 11052984, validators: 0, date: '2020-10-14', description: 'Before Beacon Chain' },
  { block: 11185280, validators: 21000, date: '2020-12-01', description: 'Beacon Chain Genesis' },
  { block: 12000000, validators: 85000, date: '2021-03-30', description: 'Q1 2021' },
  { block: 13000000, validators: 220000, date: '2021-09-04', description: 'Q3 2021' },
  { block: 14000000, validators: 310000, date: '2022-01-15', description: 'Q1 2022' },
  { block: 15000000, validators: 410000, date: '2022-06-23', description: 'Pre-Merge' },
  { block: 15537394, validators: 430000, date: '2022-09-15', description: 'The Merge' },
  { block: 16000000, validators: 470000, date: '2022-11-18', description: 'Post-Merge' },
  { block: 16500000, validators: 500000, date: '2023-01-23', description: '500k Validators' },
  { block: 17034870, validators: 530000, date: '2023-04-12', description: 'Shanghai (Withdrawals)' },
  { block: 17500000, validators: 630000, date: '2023-07-11', description: 'Post-Withdrawals Surge' },
  { block: 18000000, validators: 750000, date: '2023-10-04', description: 'Q4 2023' },
  { block: 19000000, validators: 900000, date: '2024-01-31', description: 'Q1 2024' },
  { block: 19426587, validators: 950000, date: '2024-03-13', description: 'Dencun' },
  { block: 20000000, validators: 1000000, date: '2024-05-31', description: '1M Validators!' },
  { block: 21000000, validators: 1080000, date: '2024-11-14', description: 'Current' },
]

export function ValidatorGrowth() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate current validator count based on scroll
  const currentIndex = Math.floor(scrollProgress * (validatorMilestones.length - 1))
  const nextIndex = Math.min(currentIndex + 1, validatorMilestones.length - 1)
  const segmentProgress = (scrollProgress * (validatorMilestones.length - 1)) - currentIndex

  const currentMilestone = validatorMilestones[currentIndex]
  const nextMilestone = validatorMilestones[nextIndex]

  const currentValidators = Math.floor(
    currentMilestone.validators + (nextMilestone.validators - currentMilestone.validators) * segmentProgress
  )

  // Show component only after Beacon Chain launch (when validators > 0)
  if (currentValidators === 0) return null

  // Map validator count to visual properties
  const maxValidators = 1080000
  const validatorProgress = currentValidators / maxValidators

  // Create validator "dots" grid - grows in density
  const dotsPerRow = 40
  const maxRows = 30
  const currentRows = Math.ceil(validatorProgress * maxRows)

  return (
    <div className="fixed right-8 top-32 pointer-events-none z-[2] opacity-30">
      {/* Validator counter */}
      <div className="mb-4 text-right">
        <div className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
          Active Validators
        </div>
        <div className="text-2xl font-bold text-[var(--eth-purple)] tabular-nums">
          {currentValidators.toLocaleString()}
        </div>
      </div>

      {/* Validator grid visualization */}
      <div className="relative w-48 h-80 bg-[var(--bg-secondary)]/30 rounded-lg border border-[var(--bg-tertiary)]/50 p-3 overflow-hidden">
        <div className="absolute inset-0 flex flex-col-reverse gap-[2px] p-3">
          {Array.from({ length: currentRows }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex gap-[2px] justify-center">
              {Array.from({ length: dotsPerRow }).map((_, dotIndex) => {
                // Fade dots based on age (older = more faded)
                const dotAge = (currentRows - rowIndex) / currentRows
                const opacity = 0.3 + dotAge * 0.7

                return (
                  <div
                    key={dotIndex}
                    className="w-1 h-1 rounded-full bg-[var(--eth-purple)] transition-opacity duration-1000"
                    style={{
                      opacity,
                      boxShadow: dotAge > 0.8 ? '0 0 2px var(--eth-purple)' : 'none',
                    }}
                  />
                )
              })}
            </div>
          ))}
        </div>

        {/* Milestone markers */}
        <div className="absolute left-0 right-0 bottom-3 pointer-events-none">
          {validatorMilestones
            .filter(m => m.validators > 0)
            .map((milestone, index) => {
              const milestoneProgress = milestone.validators / maxValidators
              const yPosition = milestoneProgress * 100

              // Only show markers we've passed
              if (validatorProgress < milestoneProgress) return null

              return (
                <div
                  key={index}
                  className="absolute left-0 right-0 border-t border-[var(--eth-purple)]/50"
                  style={{ bottom: `${yPosition}%` }}
                >
                  {/* Milestone label for major ones */}
                  {[21000, 500000, 1000000].includes(milestone.validators) && (
                    <div className="absolute right-full mr-2 -top-2 text-[10px] text-[var(--text-tertiary)] whitespace-nowrap">
                      {milestone.validators >= 1000000
                        ? `${(milestone.validators / 1000000).toFixed(1)}M`
                        : `${(milestone.validators / 1000).toFixed(0)}k`}
                    </div>
                  )}
                </div>
              )
            })}
        </div>
      </div>

      {/* Growth rate indicator */}
      <div className="mt-2 text-xs text-right text-[var(--text-tertiary)]">
        <span className="inline-block w-2 h-2 rounded-full bg-green-500/50 mr-1 animate-pulse" />
        Growing
      </div>
    </div>
  )
}
