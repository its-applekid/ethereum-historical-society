# Merge Conflict Analysis - 2026-03-08

## Summary
Local `main` and `origin/main` have diverged:
- **Local:** 18 commits ahead
- **Origin:** 21 commits ahead  
- **Total unique work:** 39 commits to reconcile

## Local Commits (What I Built)

### Major Features
1. **3D Ethereum Logo Background** (35d0f8c, f7cf45a)
   - Three.js component with configurable rotation, colors, opacity
   - Dual-color pyramids matching vector-eth
   - Pause/rotation animation pattern

2. **ETH Burned Counter** (1c8b3c4, 36216c7)
   - Header counter showing ETH burned since EIP-1559
   - Fetches from ultrasound.money API
   - Animating counter

3. **Uptime Counter** (09ee08d, e739c04)
   - Header counter showing days since genesis
   - Continuous update every minute

4. **Historic Gas + USD Context UI** (d09bd39, 67672d9)
   - DetailPanel displays gas prices, ETH prices, tx costs
   - Fetch script for Etherscan data (needs API key)

5. **Timeline Card Left Borders** (0f6bc95)
   - 4px colored left border per tag
   - bg-secondary background
   - Removed gradient backgrounds

6. **Theme Simplification** (0f6bc95, e5a1d25)
   - Removed "system" option, just dark/light toggle
   - Defaults to system preference on first load
   - Cream background for light mode (#FFF8F0)
   - Timeline cards 85-95% opaque

7. **Mobile UX** (ef4561c, 2f24999)
   - Hide AutoPlay button on mobile
   - Fix desktop nav flicker

### Content Additions
8. **AllCoreDevs Links** (391fd6b, f3a77cf, 649d471, 8302194)
   - Links for London, Shanghai, Dencun forks
   - Links for Byzantium, Constantinople, Istanbul, Muir Glacier, Berlin, Arrow Glacier
   - Links for Gray Glacier, The Merge
   - Ethereum Foundation blog posts for DAO Fork

9. **EDCON Events** (00282ce, d811fd0)
   - EDCON 2017 Paris
   - EDCON 2024 Tokyo

---

## Origin/Main Commits (What Someone Else Built)

### Theme & Visual Overhaul
1. **Gruvbox Color Palette** (6fb4ac4)
   - Complete color scheme change to Gruvbox
   - Dark warm tones instead of cool grays

2. **Timeline Card Styling Evolution** (4ffdd0c, 7b993ef, 346d16b)
   - Solid cards with lighter Gruvbox colors
   - Dark text on light background (light mode fix)
   - Subtle accent tint to backgrounds

3. **Theme Defaults** (5c7316b)
   - Default to dark mode
   - Remove system theme option (SAME AS MINE)

### UX Improvements  
4. **AutoPlay Enhancements** (6c9f10f, 773c3db, ffba97c)
   - Speed slider popover on hover
   - Move controls to right side
   - Safe hover area
   - Replace speed label with emojis (🐢/🚀)
   - Double scroll speed (600 → 1200 → 2400 px/s)

5. **Mobile UX** (6d119d7, 7b80049)
   - Hide play/scroll buttons on mobile (SAME AS MINE)
   - Fix bottom-left button stack gap
   - Double scroll speed

6. **Hero Changes** (1b10183, 6a99a5d)
   - Remove big play button from hero
   - Add scroll indicator with animated arrow

7. **AudioPlayer** (f18fb97)
   - Move controls to right side on hover

### Content Additions
8. **Cultural & Historical Events**
   - Bitcoin Magazine founding 2011 (a00e191)
   - The Infinite Machine book 2020 (7a373aa)
   - Art Blocks launch (7a373aa)
   - DappCon 2018, 2019 Berlin (3518981)
   - EDCON 2017 Paris, 2018 Toronto (71dac0e, 1b911dd) - OVERLAP WITH MINE

9. **L2 Milestones** (b399032, f071059)
   - L2 Stage 1 milestones
   - Marked complete in FEATURES.md

---

## Conflicts Expected

### Files with Conflicting Changes

#### 1. **FEATURES.md**
- Both: Added EDCON events (different wording)
- Origin: Added L2 Stage 1 milestones, DappCon, cultural artifacts
- Local: Marked burned counter, uptime counter complete
- **Resolution:** Merge all event additions, combine completion marks

#### 2. **src/index.css** 
- Local: Cream light theme (#FFF8F0), 85-95% opacity
- Origin: Gruvbox palette, different opacity values
- **Resolution:** Need to decide: Keep Gruvbox or cream theme? Likely keep Gruvbox since it's a comprehensive redesign, but preserve opacity improvements

#### 3. **src/hooks/useTheme.ts**
- Local: Removed system theme, simplified to dark/light
- Origin: Also removed system theme (SAME GOAL)
- **Resolution:** Should be similar, pick cleaner implementation

#### 4. **src/components/AutoPlay.tsx**
- Local: Added `hidden md:block` to hide on mobile
- Origin: Also hid on mobile + added speed slider + moved to right
- **Resolution:** Take origin version (has more features), ensure mobile hiding preserved

#### 5. **src/App.tsx**
- Local: Added 3D Ethereum logo background, hero text backgrounds
- Origin: Removed big play button, scroll indicator
- **Resolution:** Combine both - keep 3D logo, hero backgrounds, no play button, add scroll indicator

#### 6. **src/components/Header.tsx**
- Local: Added ETH burned counter, uptime counter
- Origin: May have positioning changes
- **Resolution:** Keep counters (local), check for conflicts

#### 7. **src/components/TimelineCard.tsx**
- Local: 4px left border, bg-secondary, removed gradients
- Origin: Gruvbox colors, solid cards, accent tints
- **Resolution:** Combine - use Gruvbox colors with left border accent

#### 8. **src/components/TagFilter.tsx**
- Local: Nav flicker fix
- Origin: Possible Gruvbox color updates
- **Resolution:** Check diff, likely minor

---

## Resolution Strategy

### Phase 1: Content Merges (Low Risk)
1. Merge FEATURES.md - combine all additions
2. Merge timeline data - combine all events (EDCON overlap to dedupe)

### Phase 2: Visual Design Decision
**Decision needed:** Gruvbox vs Cream theme?
- **Gruvbox (origin):** Complete, cohesive warm palette
- **Cream (local):** Lighter, matches original vision

**Recommendation:** Go with Gruvbox (more complete redesign), but:
- Preserve 85-95% opacity for readability
- Preserve left border accents (can use Gruvbox accent colors)

### Phase 3: Component Features (Combine)
1. **AutoPlay:** Origin version (slider + mobile hide) 
2. **App.tsx:** Local 3D logo + origin scroll indicator + no play button
3. **Header:** Local counters preserved
4. **TimelineCard:** Gruvbox colors + local left border concept
5. **useTheme:** Whichever is cleaner (both removed system)

### Phase 4: Test & Verify
- Build succeeds
- All features present: 3D logo, counters, Gruvbox, AutoPlay slider, scroll indicator
- Mobile: buttons hidden, layout correct
- Light/dark modes both work

---

## Next Steps

1. Start merge: `git pull --no-rebase origin main`
2. Resolve conflicts file-by-file following strategy above
3. Test build after each major conflict resolution
4. Create checklist to verify all features present
5. Commit merge with detailed message
6. Push to new branch for review before updating main

---

**Branch:** `merge-resolution-2026-03-08`
**Status:** Ready to begin conflict resolution
