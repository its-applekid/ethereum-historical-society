# L2 Timelines Feature - Brainstorm

**Date:** 2026-03-03
**Goal:** Multi-timeline support for Ethereum L2 networks with dynamic sidebar navigation

## Requirements

### Core Functionality
1. **Multiple timelines** - Separate data/events for each L2 (Optimism, Arbitrum, Base, etc.)
2. **L2 logo sidebar** - Vertically scrollable list of L2 logos (top-left, below settings)
3. **Dynamic logo appearance** - Logos appear when user scrolls past L2 launch event on mainnet
4. **Timeline switching** - Click logo → rotate/transition to that L2's timeline
5. **Separate event data** - L2-specific events only shown on their respective timelines

### UX Flow
```
Mainnet timeline (default) → User scrolls to OP mainnet launch (2021-12-16)
  → OP logo appears in sidebar
  → User clicks OP logo
  → Timeline rotates/transitions to Optimism timeline
  → Only Optimism events visible
  → Click "Mainnet" to return
```

### Technical Considerations

#### Data Structure
**Option A: Single file with chain tags**
```typescript
interface TimelineNode {
  // ... existing fields
  chain: 'mainnet' | 'optimism' | 'arbitrum' | 'base' | ...
}
```
- ✅ Pros: Single source of truth, easy to query across chains
- ❌ Cons: Large file, harder to maintain per-chain

**Option B: Separate data files per chain**
```
src/data/
  timeline-mainnet.ts
  timeline-optimism.ts
  timeline-arbitrum.ts
  timeline-base.ts
  chains.ts (metadata: logo, launch date, name, color)
```
- ✅ Pros: Modular, easier to maintain, can lazy-load per chain
- ❌ Cons: More files, need centralized chain metadata

**Decision: Option B** - Better for incremental growth, cleaner separation

#### Sidebar Design
**Logo sidebar structure:**
```tsx
<div className="fixed left-4 top-20 flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
  <button onClick={() => switchChain('mainnet')}>
    <img src="/logos/ethereum.svg" className="w-10 h-10" />
  </button>
  {unlockedL2s.map(l2 => (
    <button key={l2.id} onClick={() => switchChain(l2.id)}>
      <img src={l2.logo} className="w-10 h-10 opacity-70 hover:opacity-100" />
    </button>
  ))}
</div>
```

**Logo unlock logic:**
- Track scroll position → current visible mainnet event
- Check if visible event.date >= l2.launchDate
- If yes, add l2.id to `unlockedL2s` state
- Persist in localStorage so it doesn't reset on refresh

#### Timeline Switching Animation
**Option A: Rotate 3D effect**
```css
transform: rotateY(90deg); /* out */
/* switch data */
transform: rotateY(0deg); /* in */
```

**Option B: Slide transition**
```css
transform: translateX(-100%); /* out */
/* switch data */
transform: translateX(0); /* in */
```

**Option C: Fade cross-dissolve**
```css
opacity: 0; /* out */
/* switch data */
opacity: 1; /* in */
```

**Decision: Option A (3D rotate)** - Most distinctive, fits "archive" theme

#### State Management
```typescript
interface AppState {
  currentChain: ChainId
  unlockedChains: ChainId[]
  mainnetScrollPosition: number // preserve when switching away
  chainScrollPositions: Map<ChainId, number> // restore when switching back
}
```

#### Chain Metadata
```typescript
interface Chain {
  id: ChainId
  name: string
  logo: string
  launchDate: string // ISO 8601
  launchBlock: number // mainnet block when L2 launched
  color: string // primary brand color
  website: string
}
```

### Implementation Phases

**Phase 1: Infrastructure (this session)**
- [ ] Create multi-timeline data structure
- [ ] Add chain metadata (chains.ts)
- [ ] Build L2 sidebar component
- [ ] Implement timeline switching logic
- [ ] Add scroll-based unlock mechanism
- [ ] Create smooth transition animation
- [ ] Add 2-3 events per L2 as proof-of-concept

**Phase 2: Content Population (nightly heartbeats)**
- [ ] Fetch Optimism events (OP mainnet, governance, protocols)
- [ ] Fetch Arbitrum events
- [ ] Fetch Base events
- [ ] Fetch zkSync events
- [ ] Fetch Linea, Scroll, Blast, Mode, etc.
- [ ] Research and add key L2 milestones

**Phase 3: Polish (future)**
- [ ] Mobile-responsive sidebar (drawer on mobile?)
- [ ] Search across all timelines
- [ ] "Show all chains" view (optional)
- [ ] Chain-specific visual themes

### Open Questions

1. **Should the 3D logo background change per chain?**
   - Mainnet: Purple Ethereum logo
   - Optimism: Red OP logo
   - Arbitrum: Blue Arbitrum logo
   - Decision: Yes, makes each timeline feel distinct

2. **How to handle shared events (bridge launches, multi-chain protocols)?**
   - Option: Duplicate event across relevant chains
   - Option: Add `chains: ['mainnet', 'optimism']` field
   - Decision: Start with duplication, refactor later if needed

3. **Should mainnet timeline include L2 launch events?**
   - Yes - that's how users discover/unlock L2 timelines

4. **Persist user's current chain in URL?**
   - Example: `/#optimism` or `/?chain=optimism`
   - Decision: Yes, add `?chain=<id>` query param

### File Structure
```
src/
  data/
    chains.ts              // Chain metadata
    timeline-mainnet.ts    // Mainnet events (existing timeline.ts)
    timeline-optimism.ts   // Optimism events
    timeline-arbitrum.ts   // Arbitrum events
    timeline-base.ts       // Base events
    timeline-zksync.ts     // zkSync events
  components/
    ChainSidebar.tsx       // L2 logo sidebar
    Timeline.tsx           // Updated to support chain switching
  hooks/
    useChainSwitching.ts   // Manage chain state and transitions
```

### Next Steps
1. Create detailed implementation plan
2. Implement Phase 1 infrastructure
3. Add 2-3 events per major L2 as examples
4. Deploy and test UX
5. Begin Phase 2 content population during nightly heartbeats
