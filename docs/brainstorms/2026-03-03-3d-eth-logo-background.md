---
topic: 3D Ethereum Logo Background Integration
date: 2026-03-03
status: brainstorming
---

# 3D Ethereum Logo Background for Timeline

## Feature Description

Export the minimal necessary component for the 3D ethereum vector from the vector-eth project and import into the Ethereum archive website. Include as a translucent background behind the timeline content, but above the colored vertical lines representing the chains. Pass all necessary attributes as props so that the Ethereum archive app doesn't need to change any implementation details and can simply set things like rotation speed, color, opacity, scale, etc.

## Understanding the Requirements

### What are we building?
A reusable React component that renders the 3D Ethereum logo using Three.js, configurable via props, positioned as a background layer in the timeline.

### Why is this valuable?
- Adds visual depth and Ethereum branding to the timeline
- Creates a subtle, ambient 3D element that reinforces the Ethereum theme
- Maintains separation of concerns (component handles rendering, parent controls appearance)

### Who will use this?
The Ethereum Archive timeline view. The component will be imported and rendered with specific configuration for that context.

## Existing Patterns

### vector-eth project structure:
- Vanilla JS + Three.js
- Custom retro shaders (vertex jitter, flat shading)
- Two pyramid geometry forming Ethereum logo
- Continuous rotation and subtle pulsing animation
- Responsive sizing

### ethereum-archive project structure:
- React + TypeScript
- Vite build system
- Component-based architecture
- CSS modules for styling
- Z-index layers: chains (L2Chains.tsx), timeline content, live blocks

## Technical Approach

### 1. Component Architecture

**EthereumLogo3D.tsx** - Reusable Three.js React component
- Manages Three.js scene, camera, renderer lifecycle
- Accepts configuration props
- Cleans up on unmount
- Uses useRef for canvas and useEffect for setup/animation

**Props interface:**
```typescript
interface EthereumLogo3DProps {
  rotation?: { x: number; y: number; z: number }  // degrees per second
  color?: string                                   // hex color
  opacity?: number                                 // 0-1
  scale?: number                                   // multiplier
  enableFog?: boolean                             // scene fog
  enableVertexJitter?: boolean                    // retro effect
  className?: string                              // positioning/sizing
}
```

### 2. Extraction Strategy

**What to extract:**
- Geometry creation functions (pyramids)
- Shader code (vertex + fragment)
- Material creation (with uniforms)
- Animation logic (rotation, time uniforms)

**What to make configurable:**
- Rotation speeds (currently hardcoded)
- Color (currently purple/gradient)
- Opacity (for translucent background)
- Scale (currently mobile-responsive, make it controllable)
- Camera distance/position (optional, can default)

**What to omit:**
- Scene background color (parent controls)
- Window resize handling (can be props-based or default)
- Fog settings (make optional prop)

### 3. Z-Index Layering

**Current layers in ethereum-archive:**
1. Background (lowest)
2. L2 chain lines (svg, semi-transparent)
3. Timeline content (cards, text)
4. Live blocks section

**New layer:** 3D logo between #1 and #2
- Above base background
- Below chain lines (so lines overlay the logo)
- Fixed or absolute positioning
- Pointer-events: none (non-interactive)

**CSS approach:**
```css
.eth-logo-3d {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0; /* Below everything except base background */
  pointer-events: none;
  opacity: 0.3; /* Default, overridable */
}
```

### 4. Integration Points

**Where to render:**
- App.tsx as a sibling to existing content
- OR Timeline component if it becomes the primary view

**Default configuration for timeline:**
```tsx
<EthereumLogo3D
  rotation={{ x: 0, y: 20, z: 0 }}  // slow Y rotation only
  color="#8B5CF6"                    // match purple theme
  opacity={0.15}                     // very subtle
  scale={1.2}                        // slightly larger
  enableFog={true}                   // depth effect
  enableVertexJitter={true}          // retro aesthetic
  className="timeline-eth-logo"
/>
```

## Implementation Plan

### Phase 1: Extract & Convert
1. Create `src/components/EthereumLogo3D.tsx`
2. Port geometry, shaders, material functions
3. Set up Three.js lifecycle in React (useEffect, useRef)
4. Implement props interface with defaults

### Phase 2: Test Component
1. Create a test page or mount in App.tsx
2. Verify rendering, props work, animation runs
3. Test cleanup on unmount (memory leaks)

### Phase 3: Integrate
1. Add component to timeline view
2. Position with CSS (fixed, z-index: 0)
3. Configure props for desired appearance
4. Test on mobile (performance, visibility)

### Phase 4: Polish
1. Document props in README or FEATURES.md
2. Add TypeScript types export
3. Consider memoization if performance issues

## Questions Answered (Async Decision-Making)

**Q: Should the component handle its own responsive sizing?**
A: Yes, use window.innerWidth/innerHeight and add resize listener. Make camera distance scale-aware.

**Q: Should animation be pauseable via prop?**
A: Not initially. Keep it simple. Can add `paused` prop later if needed.

**Q: Should we support multiple colors (gradient)?**
A: Start with single color prop. Gradient can be added later as advanced prop.

**Q: What about Three.js bundle size?**
A: Ethereum archive already has complex rendering (timeline, live blocks). Three.js adds ~500kb but provides significant visual value. Worth it.

**Q: Performance on mobile?**
A: Use low geometry detail (4-sided pyramids, not high poly). Disable fog on mobile if needed. Test and optimize.

**Q: Should the logo be interactive (click/drag)?**
A: No. It's a background element. pointer-events: none.

## Success Criteria

✅ Component renders 3D Ethereum logo using Three.js
✅ Accepts all specified props (rotation, color, opacity, scale, etc.)
✅ Integrates into timeline with correct z-index layering
✅ Visible but subtle (doesn't distract from content)
✅ Performs acceptably on desktop and mobile
✅ Cleans up Three.js resources on unmount
✅ No changes needed to vector-eth implementation details

## Next Steps

Run `/ce:plan` to create detailed implementation plan with file structure, types, and step-by-step instructions.
