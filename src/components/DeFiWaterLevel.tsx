/**
 * DeFiWaterLevel.tsx
 * 
 * Background visualization of DeFi TVL as a rising "water level"
 * Shows dramatic growth during DeFi Summer 2020 and subsequent cycles
 * 
 * Data source: DeFiLlama historical TVL (pre-populated in static JSON)
 */

import { useEffect, useState } from 'react';

interface TVLDataPoint {
  date: string;
  tvl: number; // in billions USD
  blockNumber: number;
}

export function DeFiWaterLevel() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrolled / maxScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Key TVL milestones (pre-populated)
  // TODO: Fetch from DeFiLlama and save to src/data/defi-tvl.json
  const tvlMilestones: TVLDataPoint[] = [
    { date: '2020-02-01', tvl: 1, blockNumber: 9435000 }, // $1B
    { date: '2020-09-01', tvl: 10, blockNumber: 10742000 }, // $10B - DeFi Summer peak
    { date: '2021-05-01', tvl: 80, blockNumber: 12345000 }, // Pre-crash
    { date: '2021-10-01', tvl: 100, blockNumber: 13450000 }, // $100B
    { date: '2021-11-01', tvl: 177, blockNumber: 13550000 }, // ATH ~$177B
    { date: '2022-12-01', tvl: 40, blockNumber: 16100000 }, // Post-FTX crash
    { date: '2023-12-01', tvl: 60, blockNumber: 18850000 }, // Recovery
    { date: '2024-12-01', tvl: 80, blockNumber: 21300000 }, // Current (approx)
  ];

  // Map scroll position to approximate block number
  // Genesis = 0, Latest = ~21.5M (as of 2026-03)
  const LATEST_BLOCK = 21_500_000;
  const currentBlock = scrollProgress * LATEST_BLOCK;

  // Find TVL at current scroll position
  let currentTVL = 0;
  for (let i = 0; i < tvlMilestones.length - 1; i++) {
    const curr = tvlMilestones[i];
    const next = tvlMilestones[i + 1];
    
    if (currentBlock >= curr.blockNumber && currentBlock < next.blockNumber) {
      // Linear interpolation between milestones
      const progress = (currentBlock - curr.blockNumber) / (next.blockNumber - curr.blockNumber);
      currentTVL = curr.tvl + (next.tvl - curr.tvl) * progress;
      break;
    }
  }

  // If we're past the last milestone, use that value
  if (currentBlock >= tvlMilestones[tvlMilestones.length - 1].blockNumber) {
    currentTVL = tvlMilestones[tvlMilestones.length - 1].tvl;
  }

  // Convert TVL to fill percentage (0-100%)
  // Max TVL = 200B for scale
  const fillPercentage = Math.min((currentTVL / 200) * 100, 100);

  // Color transitions based on TVL level
  const getWaterColor = (tvl: number) => {
    if (tvl < 10) return 'rgba(59, 130, 246, 0.15)'; // Blue - early days
    if (tvl < 50) return 'rgba(139, 92, 246, 0.2)'; // Purple - DeFi Summer
    if (tvl < 100) return 'rgba(236, 72, 153, 0.25)'; // Pink - bull run
    return 'rgba(251, 146, 60, 0.3)'; // Orange - ATH
  };

  const waterColor = getWaterColor(currentTVL);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -1, // Behind timeline content
      }}
    >
      {/* Water fill */}
      <div
        className="absolute bottom-0 left-0 right-0 transition-all duration-300 ease-out"
        style={{
          height: `${fillPercentage}%`,
          background: `linear-gradient(to top, ${waterColor}, transparent)`,
          backdropFilter: 'blur(80px)',
        }}
      >
        {/* Wave animation at surface */}
        {fillPercentage > 0 && (
          <div
            className="absolute top-0 left-0 right-0 h-20"
            style={{
              background: `linear-gradient(to bottom, ${waterColor.replace('0.', '0.4')}, transparent)`,
              animation: 'wave 3s ease-in-out infinite',
            }}
          />
        )}
      </div>

      {/* TVL label (appears when significant) */}
      {currentTVL > 1 && (
        <div
          className="absolute left-8 text-white/40 text-sm font-mono transition-all duration-300"
          style={{
            bottom: `${fillPercentage}%`,
            transform: 'translateY(50%)',
          }}
        >
          ${currentTVL.toFixed(0)}B TVL
        </div>
      )}

      {/* Inline keyframe for wave animation */}
      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
