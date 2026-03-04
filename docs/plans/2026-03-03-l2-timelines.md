# L2 Timelines Implementation Plan

**Date:** 2026-03-03
**Feature:** Multi-timeline support for Ethereum L2 networks
**Brainstorm:** [docs/brainstorms/2026-03-03-l2-timelines.md](../brainstorms/2026-03-03-l2-timelines.md)

## Architecture Decisions

1. **Separate data files per chain** (modular, easier to maintain)
2. **Background line movement for chain switching** - Active chain's line moves to center, others fade back
3. **Scroll-based logo unlocking** (discover L2s as you scroll)
4. **Query param for chain state** (`?chain=optimism`)
5. **Start with 2-3 events per L2** (proof-of-concept, expand nightly)

## Implementation Steps

### 1. Data Layer

#### 1.1 Create chain metadata
**File:** `src/data/chains.ts`
```typescript
export type ChainId = 'mainnet' | 'optimism' | 'arbitrum' | 'base' | 'zksync' | 'linea' | 'scroll'

export interface Chain {
  id: ChainId
  name: string
  logo: string  // path to logo asset
  launchDate: string  // ISO 8601
  launchBlock: number  // mainnet block
  color: string  // brand color
  website: string
}

export const CHAINS: Record<ChainId, Chain> = { ... }
```

#### 1.2 Rename existing timeline data
```bash
git mv src/data/timeline.ts src/data/timeline-mainnet.ts
```

Update imports across codebase

#### 1.3 Create L2 timeline data files
**Files:**
- `src/data/timeline-optimism.ts`
- `src/data/timeline-arbitrum.ts`
- `src/data/timeline-base.ts`
- `src/data/timeline-zksync.ts`

Each contains 2-3 key events (genesis, major protocol, milestone)

#### 1.4 Update timeline type definition
**File:** `src/data/timeline.ts` (types only)
```typescript
export interface TimelineNode {
  // ... existing fields
  // No chain field needed - implicit from file
}
```

### 2. State Management

#### 2.1 Create chain switching hook
**File:** `src/hooks/useChainSwitching.ts`
```typescript
export function useChainSwitching() {
  const [currentChain, setCurrentChain] = useState<ChainId>('mainnet')
  const [unlockedChains, setUnlockedChains] = useState<ChainId[]>(['mainnet'])
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  // Load/save from URL params
  // Handle unlock based on scroll position
  // Manage transition animations
  
  return {
    currentChain,
    unlockedChains,
    isTransitioning,
    switchChain,
    unlockChain,
  }
}
```

#### 2.2 Update App.tsx
- Import all timeline data files
- Add useChainSwitching hook
- Pass current timeline data to Timeline component
- Handle URL query param `?chain=<id>`
- Track scroll position to unlock L2s

### 3. UI Components

#### 3.1 Create ChainSidebar component
**File:** `src/components/ChainSidebar.tsx`
```tsx
interface ChainSidebarProps {
  currentChain: ChainId
  unlockedChains: ChainId[]
  onChainSwitch: (chainId: ChainId) => void
}

export function ChainSidebar({ currentChain, unlockedChains, onChainSwitch }: ChainSidebarProps) {
  return (
    <div className="fixed left-4 top-20 z-40 flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
      {/* Mainnet always visible */}
      <button onClick={() => onChainSwitch('mainnet')}>
        <img src="/logos/ethereum.svg" className="w-10 h-10" />
      </button>
      
      {/* L2s appear when unlocked */}
      {unlockedChains.filter(c => c !== 'mainnet').map(chainId => (
        <button 
          key={chainId} 
          onClick={() => onChainSwitch(chainId)}
          className={currentChain === chainId ? 'ring-2 ring-[var(--eth-purple)]' : ''}
        >
          <img src={CHAINS[chainId].logo} className="w-10 h-10 opacity-70 hover:opacity-100" />
        </button>
      ))}
    </div>
  )
}
```

#### 3.2 Update Timeline component
Add transition wrapper:
```tsx
<div 
  className={`transition-all duration-500 ${isTransitioning ? 'rotate-y-90 opacity-0' : 'rotate-y-0 opacity-100'}`}
>
  {/* existing timeline content */}
</div>
```

#### 3.3 Update EthereumLogo3D
Make logo color configurable by chain:
```tsx
<EthereumLogo3D 
  topColor={CHAINS[currentChain].color} 
  bottomColor={darken(CHAINS[currentChain].color, 0.2)}
/>
```

### 4. Assets

#### 4.1 Add L2 logos
**Directory:** `public/logos/`
- `ethereum.svg` (mainnet)
- `optimism.svg`
- `arbitrum.svg`
- `base.svg`
- `zksync.svg`
- `linea.svg`
- `scroll.svg`

**Source:** Official brand assets from each L2's website

### 5. Scroll-based Unlock Logic

#### 5.1 Add unlock detection
In `App.tsx`, monitor scroll position:
```typescript
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY
    const viewportHeight = window.innerHeight
    
    // Check which events are currently visible
    // If mainnet event.blockNumber >= L2.launchBlock
    // → unlockChain(l2.id)
  }
  
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

#### 5.2 Persist unlocked chains
```typescript
useEffect(() => {
  localStorage.setItem('unlockedChains', JSON.stringify(unlockedChains))
}, [unlockedChains])
```

### 6. URL State Management

#### 6.1 Read chain from URL on mount
```typescript
useEffect(() => {
  const params = new URLSearchParams(window.location.search)
  const chainParam = params.get('chain') as ChainId | null
  if (chainParam && CHAINS[chainParam]) {
    setCurrentChain(chainParam)
  }
}, [])
```

#### 6.2 Update URL when chain changes
```typescript
useEffect(() => {
  const params = new URLSearchParams(window.location.search)
  if (currentChain === 'mainnet') {
    params.delete('chain')
  } else {
    params.set('chain', currentChain)
  }
  window.history.replaceState({}, '', `?${params.toString()}`)
}, [currentChain])
```

### 7. Initial L2 Events (2-3 per chain)

#### Optimism
1. **OP Mainnet Launch** (2021-12-16, block 0)
2. **Bedrock Upgrade** (2023-06-06)
3. **OP token airdrop** (2022-06-01)

#### Arbitrum
1. **Arbitrum One Launch** (2021-08-31)
2. **Arbitrum Nova Launch** (2022-08-09)
3. **ARB token launch** (2023-03-23)

#### Base
1. **Base Mainnet Launch** (2023-07-13)
2. **Coinbase integration** (2023-08-09)
3. **1M transactions milestone** (2023-09-01)

#### zkSync
1. **zkSync Era Mainnet** (2023-03-24)
2. **ZK token launch** (TBD)

## Testing Checklist

- [ ] All L2 logos load correctly
- [ ] Clicking logo switches timeline data
- [ ] Transition animation is smooth (500ms)
- [ ] Unlocked L2s persist across page refresh
- [ ] URL updates when switching chains
- [ ] Direct link with `?chain=optimism` works
- [ ] Scroll to OP launch → OP logo appears
- [ ] Mobile responsive (sidebar → drawer?)

## Rollout Plan

**Phase 1 (this session):**
1. Create PR branch: `feature/l2-timelines`
2. Implement all infrastructure (steps 1-6)
3. Add 2-3 events per major L2
4. Test UX flow
5. Deploy and share preview
6. Open PR for review

**Phase 2 (nightly heartbeats):**
- Each night, add 5-10 more L2-specific events
- Focus on one L2 per night until comprehensive
- Prioritize: Optimism → Arbitrum → Base → zkSync → others

**Phase 3 (future):**
- Mobile optimization
- Cross-chain event search
- Visual theme per chain
- Additional L2s (Blast, Mode, Mantle, etc.)

## Success Metrics

- [x] Brainstorm complete
- [x] Plan complete
- [ ] Infrastructure implemented
- [ ] 2-3 events per L2 added
- [ ] Deployed and testable
- [ ] PR opened and merged

---

**Next:** Begin implementation on feature branch
