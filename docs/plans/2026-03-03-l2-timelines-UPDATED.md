# L2 Timelines - Updated Animation Approach

**Updated:** 2026-03-04
**Change:** Background line movement instead of 3D rotation

## Visual Design

### Chain Switching via Background Lines

Instead of rotating the timeline view, we use the existing L2Chains background visualization:

**Default state (Mainnet active):**
- Mainnet line: center position, high opacity (0.8-1.0), higher z-index
- L2 lines (OP, Arbitrum, Base, etc.): background positions, lower opacity (0.3-0.5)

**When user clicks Optimism logo:**
1. OP red line animates to center (z-index bump, opacity increase)
2. Mainnet blue line animates to background (z-index lower, opacity decrease)
3. Timeline events fade out (300ms)
4. Data switches to Optimism events
5. Timeline events fade in (300ms)

**Benefits:**
- Uses existing visual language (L2Chains component)
- Smooth, elegant transition
- No jarring viewport changes
- Clear visual indicator of active chain

## Updated Implementation

### L2Chains Component Modification

**New prop:** `activeChain: ChainId`

```typescript
interface L2ChainsProps {
  progress: number
  activeChain: ChainId  // NEW
}

export function L2Chains({ progress, activeChain }: L2ChainsProps) {
  // For each chain:
  // - If chain === activeChain: center position, opacity 0.8-1.0, z-index 15
  // - Else: background position, opacity 0.3-0.5, z-index 5
  
  const getChainStyle = (chainId: ChainId) => {
    const isActive = chainId === activeChain
    return {
      opacity: isActive ? 0.9 : 0.4,
      zIndex: isActive ? 15 : 5,
      transform: isActive ? 'translateX(0)' : 'translateX(20px)', // slight offset for inactive
      transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)',
    }
  }
}
```

### Timeline Component Modification

**Fade transition for event switching:**

```typescript
const [isTransitioning, setIsTransitioning] = useState(false)

const switchChain = async (newChain: ChainId) => {
  setIsTransitioning(true)
  await new Promise(resolve => setTimeout(resolve, 300)) // fade out
  setCurrentChain(newChain)
  await new Promise(resolve => setTimeout(resolve, 50)) // brief pause
  setIsTransitioning(false) // fade in
}

// In render:
<div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
  {/* timeline events */}
</div>
```

### Visual Hierarchy

**Z-index layers:**
- 0: 3D Ethereum logo background
- 5: Inactive L2 lines
- 10: L2 chains visualization container
- 15: Active chain line
- 20: Timeline content
- 30: Sidebar (chain logos)
- 40: Header
- 50: Modals/panels

## Implementation Checklist

- [ ] Update L2Chains to accept `activeChain` prop
- [ ] Add dynamic styling based on active chain
- [ ] Implement smooth transition (600ms cubic-bezier)
- [ ] Add Timeline fade transition (300ms)
- [ ] Wire up chain switching in App.tsx
- [ ] Test transitions (mainnet → OP → Arbitrum → Base)
- [ ] Verify z-index stacking
- [ ] Mobile responsive check

---

**Next:** Begin implementation
