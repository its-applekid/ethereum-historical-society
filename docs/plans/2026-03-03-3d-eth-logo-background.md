---
title: 3D Ethereum Logo Background Integration
status: planning
created: 2026-03-03
brainstorm: docs/brainstorms/2026-03-03-3d-eth-logo-background.md
---

# Plan: 3D Ethereum Logo Background for Timeline

**Reference:** See [brainstorm](docs/brainstorms/2026-03-03-3d-eth-logo-background.md) for detailed requirements analysis and technical approach.

## Summary

Extract Three.js Ethereum logo rendering from vector-eth project, convert to a reusable React component with configurable props, and integrate as a translucent background layer in the ethereum-archive timeline.

## Success Criteria

✅ `EthereumLogo3D.tsx` component renders 3D Ethereum logo
✅ Accepts props: rotation (x/y/z), color, opacity, scale, fog, jitter
✅ Positioned behind timeline content, above chain lines (z-index: 0)
✅ Performs well on desktop and mobile
✅ Cleans up Three.js resources on unmount
✅ Parent app can configure without touching component internals

## File Structure

```
ethereum-archive/
├── src/
│   ├── components/
│   │   ├── EthereumLogo3D.tsx          # NEW: Three.js logo component
│   │   └── EthereumLogo3D.module.css   # NEW: Positioning styles
│   ├── App.tsx                          # MODIFIED: Import and render logo
│   └── data/
│       └── timeline.ts                  # NO CHANGE
├── package.json                         # MODIFIED: Add three dependency
└── docs/
    └── FEATURES.md                      # MODIFIED: Document new component
```

## Dependencies

**Add to package.json:**
```bash
npm install three @types/three
```

Three.js: ~500kb minified, provides WebGL rendering.

## Implementation Steps

### Step 1: Install Dependencies

```bash
cd /home/applekid/openclaw/projects/ethereum-archive
npm install three @types/three
```

### Step 2: Create Component File

**File:** `src/components/EthereumLogo3D.tsx`

**Imports:**
```typescript
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './EthereumLogo3D.module.css';
```

**Props Interface:**
```typescript
export interface EthereumLogo3DProps {
  rotation?: { x: number; y: number; z: number };  // degrees per second
  color?: string;                                   // hex color
  opacity?: number;                                 // 0-1
  scale?: number;                                   // size multiplier
  enableFog?: boolean;                             // scene fog
  enableVertexJitter?: boolean;                    // retro effect
  className?: string;                              // additional CSS
}
```

**Defaults:**
```typescript
const defaultProps: Required<EthereumLogo3DProps> = {
  rotation: { x: 0, y: 20, z: 0 },
  color: '#8B5CF6',
  opacity: 0.15,
  scale: 1.2,
  enableFog: true,
  enableVertexJitter: true,
  className: '',
};
```

**Component Structure:**
1. Merge props with defaults
2. useRef for canvas element
3. useRef for Three.js objects (scene, camera, renderer, meshes)
4. useEffect for initialization
5. useEffect for animation loop
6. useEffect for cleanup
7. useEffect for window resize
8. Return canvas element

**From vector-eth, extract:**
- `vertexShader` string (vertex jitter logic)
- `fragmentShader` string (flat shading logic)
- `createRetroMaterial(color)` function
- Pyramid geometry creation (top + bottom)
- Animation logic (rotation, time uniforms)

**Modifications:**
- Use props instead of hardcoded values
- Camera position based on scale prop
- Remove scene.background (transparent)
- Remove document.body rendering
- Add conditional fog based on enableFog prop
- Add conditional jitter based on enableVertexJitter prop

### Step 3: Create CSS Module

**File:** `src/components/EthereumLogo3D.module.css`

```css
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0; /* Below timeline content, above base background */
  pointer-events: none; /* Non-interactive */
}
```

### Step 4: Integrate into App

**File:** `src/App.tsx`

**Import:**
```typescript
import { EthereumLogo3D } from './components/EthereumLogo3D';
```

**Render (before main content):**
```tsx
<EthereumLogo3D
  rotation={{ x: 0, y: 20, z: 0 }}
  color="#8B5CF6"
  opacity={0.15}
  scale={1.2}
  enableFog={true}
  enableVertexJitter={true}
/>
```

**Z-index considerations:**
- Logo: z-index: 0 (fixed)
- L2Chains: Ensure z-index > 0 (check L2Chains.tsx)
- Timeline content: Default flow, should be above

### Step 5: Test

1. **Build test:**
   ```bash
   npm run build
   ```

2. **Dev server:**
   ```bash
   npm run dev
   ```

3. **Visual verification:**
   - Logo visible behind timeline
   - Timeline content readable
   - Chain lines above logo
   - Logo rotates smoothly
   - No console errors

4. **Performance:**
   - Check FPS on desktop (should be 60fps)
   - Check FPS on mobile (target 30fps min)
   - Monitor memory (no leaks after mount/unmount cycles)

5. **Responsive:**
   - Test on narrow viewports (mobile)
   - Test on wide viewports (desktop)
   - Logo should scale appropriately

### Step 6: Document

**File:** `docs/FEATURES.md`

Add section:
```markdown
### 3D Ethereum Logo Background

**Status:** ✅ Implemented (2026-03-03)

**Component:** `src/components/EthereumLogo3D.tsx`

**Description:** Translucent 3D Ethereum logo rendered with Three.js as a background layer. Positioned behind timeline content but above base background. Subtle rotation and retro vertex jitter effects.

**Configuration:**
- Rotation speed (x/y/z degrees per second)
- Color (hex string)
- Opacity (0-1)
- Scale (size multiplier)
- Enable fog (depth effect)
- Enable vertex jitter (retro aesthetic)

**Dependencies:** three, @types/three (~500kb)

**Performance:** Minimal geometry (4-sided pyramids). Target 60fps desktop, 30fps mobile.
```

### Step 7: Commit

```bash
git add src/components/EthereumLogo3D.tsx
git add src/components/EthereumLogo3D.module.css
git add src/App.tsx
git add package.json package-lock.json
git add docs/FEATURES.md
git commit -m "Add 3D Ethereum logo background component

- Extracted Three.js rendering from vector-eth project
- Created configurable React component with props
- Integrated as translucent background layer (z-index: 0)
- Positioned behind timeline content, above chain lines
- Configurable: rotation, color, opacity, scale, fog, jitter
- Cleans up Three.js resources on unmount

Dependencies: three, @types/three (~500kb)"
```

## Implementation Checklist

- [ ] Install three + @types/three
- [ ] Create EthereumLogo3D.tsx component
  - [ ] Port shaders from vector-eth
  - [ ] Port geometry creation
  - [ ] Port material creation
  - [ ] Set up Three.js lifecycle (init, animate, cleanup)
  - [ ] Implement props interface
  - [ ] Add resize handler
- [ ] Create EthereumLogo3D.module.css
- [ ] Integrate into App.tsx
- [ ] Verify z-index layering (logo < chains < content)
- [ ] Test build
- [ ] Test dev server
- [ ] Test performance (desktop + mobile)
- [ ] Test responsive sizing
- [ ] Document in FEATURES.md
- [ ] Commit changes

## Risk Assessment

**Low Risk:**
- Three.js is battle-tested, widely used
- Component is isolated, won't affect existing features
- Can be disabled by removing from App.tsx

**Potential Issues:**
- Performance on low-end mobile devices
  - Mitigation: Use low-poly geometry, test on target devices
- Bundle size increase (~500kb)
  - Mitigation: Acceptable for visual enhancement, Three.js is tree-shakeable
- Memory leaks if cleanup fails
  - Mitigation: Test mount/unmount cycles, verify dispose() calls

## Alternatives Considered

**CSS + SVG animation:**
- Pro: Smaller bundle
- Con: No true 3D, limited visual effects
- Rejected: Three.js provides better depth and lighting

**Pre-rendered video/GIF:**
- Pro: Zero JS cost
- Con: Not configurable, larger file size, quality loss
- Rejected: Loss of configurability via props

**Canvas 2D with pseudo-3D:**
- Pro: Smaller bundle than Three.js
- Con: Complex manual projection math, limited effects
- Rejected: Three.js provides better abstraction

## Timeline Estimate

**Total: 2-3 hours**
- Component creation: 1.5 hours
- Integration & testing: 0.5 hours
- Documentation: 0.5 hours

## Next Step

Run `/ce:work` to execute this plan using git worktrees and task tracking.
