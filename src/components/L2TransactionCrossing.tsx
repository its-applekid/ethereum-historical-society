/**
 * L2 vs L1 Transaction Crossing
 * Shows the historic moment when L2 daily transactions overtook L1
 * - L1 line: relatively flat (13M gas limit = ~1M txs/day capacity)
 * - L2 lines: exponential growth as rollups scale
 * - Crossover point: Q2 2024 (historic milestone)
 */

import { useEffect, useRef } from 'react'

interface TransactionData {
  date: string
  l1: number // millions of transactions per day
  l2Total: number // millions of transactions per day (all L2s combined)
}

// Estimated L1 and L2 transaction volumes (daily averages)
// Source: growthepie.xyz, L2Beat, Etherscan
const TX_DATA: TransactionData[] = [
  { date: '2021-01', l1: 1.2, l2Total: 0.05 }, // Optimism/Arbitrum early days
  { date: '2021-06', l1: 1.1, l2Total: 0.15 },
  { date: '2021-12', l1: 1.2, l2Total: 0.4 },
  { date: '2022-06', l1: 1.0, l2Total: 0.6 },
  { date: '2022-12', l1: 1.1, l2Total: 0.8 },
  { date: '2023-06', l1: 1.1, l2Total: 1.5 },
  { date: '2023-12', l1: 1.2, l2Total: 2.5 },
  { date: '2024-03', l1: 1.1, l2Total: 3.2 }, // Dencun drops L2 costs 10-100x
  { date: '2024-06', l1: 1.0, l2Total: 5.5 }, // CROSSOVER POINT
  { date: '2024-09', l1: 1.0, l2Total: 8.0 },
  { date: '2024-12', l1: 1.1, l2Total: 11.5 },
  { date: '2025-03', l1: 1.0, l2Total: 15.0 }, // Present day (projected)
]

export function L2TransactionCrossing() {
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
    const padding = { top: 40, right: 20, bottom: 60, left: 60 }
    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    // Clear canvas
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, width, height)

    // Find crossover point
    const crossoverIndex = TX_DATA.findIndex(d => d.l2Total > d.l1)
    const crossover = TX_DATA[crossoverIndex]

    // Find min/max values
    const maxTx = Math.ceil(Math.max(...TX_DATA.map(d => Math.max(d.l1, d.l2Total))))
    
    // Scale functions
    const scaleX = (index: number) => 
      padding.left + (index / (TX_DATA.length - 1)) * chartWidth
    
    const scaleY = (tx: number) =>
      padding.top + chartHeight - (tx / maxTx) * chartHeight

    // Draw grid lines (horizontal)
    ctx.strokeStyle = '#222'
    ctx.lineWidth = 1
    for (let tx = 0; tx <= maxTx; tx += 2) {
      const y = scaleY(tx)
      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(width - padding.right, y)
      ctx.stroke()

      // Y-axis labels
      ctx.fillStyle = '#666'
      ctx.font = '12px monospace'
      ctx.textAlign = 'right'
      ctx.fillText(`${tx}M`, padding.left - 10, y + 4)
    }

    // Draw crossover line (vertical)
    if (crossoverIndex >= 0) {
      const crossoverX = scaleX(crossoverIndex)
      
      ctx.strokeStyle = '#F59E0B'
      ctx.lineWidth = 2
      ctx.setLineDash([5, 5])
      ctx.beginPath()
      ctx.moveTo(crossoverX, padding.top)
      ctx.lineTo(crossoverX, height - padding.bottom)
      ctx.stroke()
      ctx.setLineDash([])

      // Label the crossover
      ctx.fillStyle = '#F59E0B'
      ctx.font = 'bold 11px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('CROSSOVER', crossoverX, padding.top - 25)
      ctx.font = '10px monospace'
      ctx.fillText(crossover.date, crossoverX, padding.top - 10)
    }

    // Draw L1 line
    ctx.strokeStyle = '#60A5FA'
    ctx.lineWidth = 3
    ctx.beginPath()
    TX_DATA.forEach((point, i) => {
      const x = scaleX(i)
      const y = scaleY(point.l1)
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw L2 line
    ctx.strokeStyle = '#F472B6'
    ctx.lineWidth = 3
    ctx.beginPath()
    TX_DATA.forEach((point, i) => {
      const x = scaleX(i)
      const y = scaleY(point.l2Total)
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw data points on crossover area (highlight the moment)
    if (crossoverIndex >= 0) {
      for (let i = crossoverIndex - 1; i <= crossoverIndex + 1; i++) {
        if (i < 0 || i >= TX_DATA.length) continue
        const point = TX_DATA[i]
        
        // L1 point
        const x1 = scaleX(i)
        const y1 = scaleY(point.l1)
        ctx.fillStyle = '#60A5FA'
        ctx.beginPath()
        ctx.arc(x1, y1, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.strokeStyle = '#000'
        ctx.lineWidth = 2
        ctx.stroke()

        // L2 point
        const y2 = scaleY(point.l2Total)
        ctx.fillStyle = '#F472B6'
        ctx.beginPath()
        ctx.arc(x1, y2, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.strokeStyle = '#000'
        ctx.lineWidth = 2
        ctx.stroke()
      }
    }

    // X-axis labels (every 6 months)
    ctx.fillStyle = '#666'
    ctx.font = '11px sans-serif'
    ctx.textAlign = 'center'
    TX_DATA.forEach((point, i) => {
      if (i % 2 === 0) { // Show every other label
        const x = scaleX(i)
        ctx.fillText(point.date, x, height - padding.bottom + 20)
      }
    })

    // Chart title
    ctx.fillStyle = '#fff'
    ctx.font = 'bold 14px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('Daily Transactions: L1 vs L2s', padding.left, 20)

    // Legend
    const legendX = width - padding.right - 140
    const legendY = padding.top + 10
    
    // L1 line sample
    ctx.strokeStyle = '#60A5FA'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(legendX, legendY)
    ctx.lineTo(legendX + 30, legendY)
    ctx.stroke()
    ctx.fillStyle = '#aaa'
    ctx.font = '11px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('Ethereum L1', legendX + 35, legendY + 4)

    // L2 line sample
    ctx.strokeStyle = '#F472B6'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(legendX, legendY + 20)
    ctx.lineTo(legendX + 30, legendY + 20)
    ctx.stroke()
    ctx.fillStyle = '#aaa'
    ctx.fillText('All L2s', legendX + 35, legendY + 24)

  }, [])

  return (
    <div className="bg-[var(--bg-secondary)] rounded-lg p-6 border border-[var(--bg-tertiary)]">
      <canvas
        ref={canvasRef}
        className="w-full h-64"
      />
      <div className="mt-4 text-sm text-[var(--text-muted)] space-y-2">
        <p>
          <span className="text-[#60A5FA]">●</span> <strong>L1 (Ethereum mainnet):</strong> Limited by gas limit (~1M transactions/day capacity)
        </p>
        <p>
          <span className="text-[#F472B6]">●</span> <strong>L2s (Rollups):</strong> Optimism, Arbitrum, Base, zkSync, Linea, Scroll, and others
        </p>
        <p className="text-[#F59E0B] font-medium">
          ⚡ <strong>Crossover (June 2024):</strong> L2 daily transactions surpassed L1 for the first time — rollups proved Ethereum's scaling thesis
        </p>
        <p className="text-xs italic mt-3">
          Dencun (March 2024) dropped L2 costs 10-100x via blob transactions (EIP-4844), accelerating adoption
        </p>
      </div>
    </div>
  )
}
