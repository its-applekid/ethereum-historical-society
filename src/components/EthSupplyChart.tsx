/**
 * ETH Supply Animation
 * Shows total ETH supply over time with annotations for major economic events
 * - Inflationary PoW era (5 ETH → 3 ETH → 2 ETH block rewards)
 * - The Merge (PoW → PoS, ~90% reduction in issuance)
 * - EIP-1559 burning era (deflationary periods when burn > issuance)
 */

import { useEffect, useRef } from 'react'

interface SupplyDataPoint {
  blockNumber: number
  date: string
  supply: number // total ETH in millions
  issuanceRate: number // annual % (positive = inflationary, negative = deflationary)
  label?: string
}

// Estimated ETH supply at key milestones
// Source: etherscan.io/chart/ethersupply2 + ultrasound.money
const SUPPLY_DATA: SupplyDataPoint[] = [
  { blockNumber: 1, date: '2015-07-30', supply: 72, issuanceRate: 10.3, label: 'Genesis (72M pre-mine)' },
  { blockNumber: 1_150_000, date: '2016-03-14', supply: 78, issuanceRate: 14.75, label: 'Homestead (5 ETH/block)' },
  { blockNumber: 4_370_000, date: '2017-10-16', supply: 95, issuanceRate: 7.4, label: 'Byzantium (3 ETH/block)' },
  { blockNumber: 7_280_000, date: '2019-02-28', supply: 105, issuanceRate: 4.5, label: 'Constantinople (2 ETH/block)' },
  { blockNumber: 12_965_000, date: '2021-08-05', supply: 117, issuanceRate: 4.3, label: 'London (EIP-1559 burn begins)' },
  { blockNumber: 15_537_394, date: '2022-09-15', supply: 120.5, issuanceRate: 0.2, label: 'The Merge (PoS, ~90% issuance drop)' },
  { blockNumber: 17_034_870, date: '2023-04-12', supply: 120.1, issuanceRate: -0.25, label: 'Shanghai (first deflationary period)' },
  { blockNumber: 19_426_587, date: '2024-03-13', supply: 120.0, issuanceRate: -0.1, label: 'Dencun (sustained ultra-sound money)' },
]

export function EthSupplyChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const width = rect.width
    const height = rect.height
    const padding = { top: 20, right: 20, bottom: 60, left: 60 }
    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    // Clear canvas
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, width, height)

    // Find min/max values
    const minSupply = Math.floor(Math.min(...SUPPLY_DATA.map(d => d.supply)) / 10) * 10
    const maxSupply = Math.ceil(Math.max(...SUPPLY_DATA.map(d => d.supply)) / 10) * 10
    const minBlock = SUPPLY_DATA[0].blockNumber
    const maxBlock = SUPPLY_DATA[SUPPLY_DATA.length - 1].blockNumber

    // Scale functions
    const scaleX = (block: number) => 
      padding.left + ((block - minBlock) / (maxBlock - minBlock)) * chartWidth
    
    const scaleY = (supply: number) =>
      padding.top + chartHeight - ((supply - minSupply) / (maxSupply - minSupply)) * chartHeight

    // Draw grid lines (horizontal)
    ctx.strokeStyle = '#222'
    ctx.lineWidth = 1
    for (let supply = minSupply; supply <= maxSupply; supply += 10) {
      const y = scaleY(supply)
      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(width - padding.right, y)
      ctx.stroke()

      // Y-axis labels
      ctx.fillStyle = '#666'
      ctx.font = '12px monospace'
      ctx.textAlign = 'right'
      ctx.fillText(`${supply}M`, padding.left - 10, y + 4)
    }

    // Draw The Merge line (major visual separator)
    const mergePoint = SUPPLY_DATA.find(d => d.blockNumber === 15_537_394)!
    const mergeX = scaleX(mergePoint.blockNumber)
    
    ctx.strokeStyle = '#00D395'
    ctx.lineWidth = 2
    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.moveTo(mergeX, padding.top)
    ctx.lineTo(mergeX, height - padding.bottom)
    ctx.stroke()
    ctx.setLineDash([])

    // Label The Merge
    ctx.fillStyle = '#00D395'
    ctx.font = 'bold 11px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('THE MERGE', mergeX, padding.top - 5)

    // Draw supply line
    ctx.strokeStyle = '#8B5CF6'
    ctx.lineWidth = 3
    ctx.beginPath()
    SUPPLY_DATA.forEach((point, i) => {
      const x = scaleX(point.blockNumber)
      const y = scaleY(point.supply)
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw data points
    SUPPLY_DATA.forEach(point => {
      const x = scaleX(point.blockNumber)
      const y = scaleY(point.supply)

      // Color based on issuance rate
      const color = point.issuanceRate > 0 ? '#F87171' : '#34D399'
      
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fill()

      // Stroke
      ctx.strokeStyle = '#000'
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // X-axis labels (years)
    ctx.fillStyle = '#666'
    ctx.font = '12px sans-serif'
    ctx.textAlign = 'center'
    const years = ['2015', '2017', '2019', '2021', '2023', '2025']
    years.forEach(year => {
      const yearData = SUPPLY_DATA.find(d => d.date.startsWith(year))
      if (yearData) {
        const x = scaleX(yearData.blockNumber)
        ctx.fillText(year, x, height - padding.bottom + 20)
      }
    })

    // Chart title
    ctx.fillStyle = '#fff'
    ctx.font = 'bold 14px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('Total ETH Supply Over Time', padding.left, 15)

    // Legend
    const legendX = width - padding.right - 150
    const legendY = padding.top + 10
    
    // Inflationary dot
    ctx.fillStyle = '#F87171'
    ctx.beginPath()
    ctx.arc(legendX, legendY, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#aaa'
    ctx.font = '11px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('Inflationary', legendX + 10, legendY + 4)

    // Deflationary dot
    ctx.fillStyle = '#34D399'
    ctx.beginPath()
    ctx.arc(legendX, legendY + 20, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#aaa'
    ctx.fillText('Deflationary', legendX + 10, legendY + 24)

  }, [])

  return (
    <div className="bg-[var(--bg-secondary)] rounded-lg p-6 border border-[var(--bg-tertiary)]">
      <canvas
        ref={canvasRef}
        className="w-full h-64 cursor-crosshair"
      />
      <div className="mt-4 text-sm text-[var(--text-muted)] space-y-2">
        <p>
          <span className="text-[#F87171]">●</span> PoW era: Block rewards decreased from 5 → 3 → 2 ETH, but supply still grew ~4.5% annually
        </p>
        <p>
          <span className="text-[#00D395]">●</span> The Merge: Issuance dropped ~90%, from ~13k ETH/day to ~1.7k ETH/day
        </p>
        <p>
          <span className="text-[#34D399]">●</span> Post-Merge: EIP-1559 burn often exceeds issuance, making ETH deflationary ("ultra sound money")
        </p>
      </div>
    </div>
  )
}
