# Ethereum Archive — Feature Breakdown

*Detailed feature list from vision sessions. Keep this up to date.*

## App Structure (Multi-page as of 2026-03-10)

**Three pages:**
1. **Timeline** (/) — Educational, historical, artistic experience of Ethereum's evolution
2. **Metrics** (/metrics) — Economic and scaling charts (supply, L2 crossing, etc.)
3. **Gas** (/gas) — Live gas tracker across Ethereum L1 and 7 L2s with RPC estimates

## Core Concept

**Three-part nature:**
1. **Educational** — teach what Ethereum is and why it matters
2. **Historical/Architectural** — document design evolution and tradeoffs
3. **Art** — visually compelling, almost meditative experience

**Key insight:** The blockchain IS a clock. Everything indexed by block numbers, not just dates.

---

## Gas Tracker Features (Live as of 2026-03-10)

### Live Gas Estimates
- [x] **Multi-chain support** — Ethereum L1, Optimism, Arbitrum, Base, zkSync Era, Linea, Scroll
- [x] **RPC integration** — Real-time `eth_gasPrice` calls to public RPCs
- [x] **Action simulations** — ETH transfer, ERC-20 transfer, Uniswap swap, Morpho deposit
- [x] **Cost display** — Shows cost in both ETH and USD for each action/chain combination
- [x] **Auto-refresh** — Updates every 30 seconds
- [x] **Comparative view** — Table layout makes L1 vs L2 costs immediately obvious

### Future Enhancements
- [ ] Historical gas price charts per chain
- [ ] Gas alerts (notify when L1 gas drops below threshold)
- [ ] Custom action builder (user inputs contract + calldata)
- [ ] More L2s (Blast, Mantle, Polygon zkEVM, Starknet)
- [ ] Gas optimization tips per chain

---

## Phase 1: Foundation

### Timeline Core
- [x] Static timeline with text + links
- [x] Block-indexed events (timestamp → block number conversion) — backend has block_time.rs
- [x] Era markers (Frontier → Homestead → Metropolis → etc.)
- [x] Basic detail panels for each event
- [x] Block numbers moved to bottom right of detail panel
- [x] Support for approximate blocks with tilde (~) prefix
- [x] **Deep linking** — URL hash routing (e.g., `#the-merge`) opens and scrolls to event

### 🔢 Block Numbers for All Events (TODO)
**Every event needs a block number.** For events without an exact block:
1. Look up the date/time of the event
2. Find the approximate block at that timestamp
3. Add `blockNumber` with `approximateBlock: true` to show tilde (~)

Events needing block numbers:
- [x] Whitepaper (Nov 27, 2013) — pre-genesis, omitted (before block 0)
- [x] Bitcoin Miami announcement (Jan 26, 2014) — pre-genesis, omitted
- [x] The Spaceship (June 2014) — pre-genesis, omitted
- [x] Crowdsale (July 22, 2014) — pre-genesis, omitted
- [x] DevCon 0-7 — all have approximate block numbers
- [x] Vitalik blog posts — all 4 have approximate block numbers
- [x] CryptoKitties congestion (Nov 28, 2017) — ~4,605,000
- [x] DeFi Summer/Compound (June 15, 2020) — ~10,300,000
- [x] Beeple NFT sale (March 11, 2021) — ~12,020,000
- [x] L2 launches (Optimism, Arbitrum, Base, zkSync, Linea, Scroll) — all have blocks
- [x] Raiden Network, Plasma whitepaper dates — have approximate blocks
- [x] Yearn Finance launch — ~10,500,000
- [x] ENS launch — has exact block 3648571
- [x] MakerDAO launch — ~4,750,000
- [x] Uniswap V1 launch — ~6,640,000

**Tool:** Use Etherscan's block-by-timestamp: `https://etherscan.io/block?t=UNIX_TIMESTAMP`

### Data Sources
- [x] ethereum/EIPs repo integration — backend has github.rs
- [x] ethereum/pm repo (AllCoreDevs notes, upgrade specs) — backend scaffolded
- [x] Hard fork block numbers (static, well-documented) — in timeline.ts
- [x] Vitalik's blog posts (manual curation initially) — Added 4 key essays

### Tagging System
Tags: `protocol`, `scaling`, `defi`, `nft`, `social`, `research`, `security`
- [x] Tag each event — Tag type + tags field added
- [x] Filter by tags — TagFilter.tsx component created
- [x] Presets: "Protocol Deep Dive" / "DeFi Journey" / "Full Experience"

### Content Tracks
**Protocol layer:**
- Hard forks, EIPs, upgrades
- Architectural decisions

**Application layer:**
- MakerDAO (early DeFi, DAI stablecoin)
- CryptoKitties (congestion wake-up call)
- Uniswap (AMM breakthrough, DeFi summer)
- Compound, Aave (lending)
- OpenSea, NFT boom
- ENS (identity layer)

**Failed/abandoned attempts (educational):**
- Raiden Network (state channels, eclipsed by rollups)
- Plasma (data availability issues)

---

## Phase 2: Animation

### "On Rails" Mode
- [x] Click play, watch Ethereum evolve — AutoPlay.tsx
- [x] Auto-scroll through timeline — smooth animation
- [x] Pause/resume controls — detects manual scroll to auto-pause
- [ ] Blocks with connectors marching forward (future: add block animation)

### Visual Effects
- [ ] Hard forks as visual events (chain diverging for ETC split)
- [ ] L2s appearing in background/distance as they launch
- [ ] Visual complexity grows as ecosystem grows
- [ ] Merge glow effect at block 15,537,394

### L2 Chain Visualization
- [x] Faded lines in background — L2Chains.tsx
- [x] Lines tied to specific milestones (not arbitrary)
- [x] Full-length lines (from milestone to bottom of page)
- [x] Optimism (red), Arbitrum (blue), Base (blue), zkSync, Linea, Scroll
- [x] Historical: Plasma, Raiden (very faded - abandoned)
- [x] ETC fork as first branch (most faded - ancient history)
- [x] Horizontal connectors from main line to branches
- [x] Unique shimmer effects per chain (slow/medium/fast/pulse/wave)
- [x] Age-based opacity (older = more faded)
- [x] The Merge glow effect
- [x] Dencun/4844 milestone glow
- [x] **Beacon Chain** — parallel line (orange, more solid) that curves and merges into mainline at The Merge
- [x] SVG curve for smooth Beacon Chain → mainline merge animation
- [x] **Hard fork ghost branches** — short dashed curves at each fork that fade out (the "old chain" that died)
- [x] **Rainbow effect at timeline end** — L2 lines get brighter/glowier as you scroll toward present
- [x] **Live section shimmer** — main line pulses/shimmers only in the live block section (bottom 8%); solid elsewhere

### 3D Ethereum Logo Background
- [x] **Status:** ✅ Implemented (2026-03-03)
- [x] **Component:** `src/components/EthereumLogo3D.tsx`
- [x] **Description:** Translucent 3D Ethereum logo rendered with Three.js as a background layer
- [x] **Positioning:** Behind timeline content, above base background, below L2 chain lines (z-index: 0)
- [x] **Visual effects:** Subtle Y-axis rotation (20°/s), soft bob animation, retro vertex jitter, depth fog
- [x] **Configurable props:** Rotation speed (x/y/z), color (hex), opacity (0-1), scale, fog enable, jitter enable
- [x] **Performance:** Low-poly geometry (4-sided pyramids), 60fps desktop target, 30fps mobile minimum
- [x] **Bundle impact:** Three.js adds ~500kb (acceptable for visual enhancement)

---

## Phase 3: Immersive

### Live Block Feed
- [x] Bottom of timeline = "Now" — LiveBlockFeed.tsx
- [x] WebSocket connection for real-time blocks (with polling fallback)
- [x] Links to Etherscan for details
- [x] Historical becomes present
- [x] Older blocks fade, newest at bottom (highlighted)
- [x] Auto-cycles without scrolling

### Future History Section
- [x] "The history that hasn't happened yet" — FutureHistory.tsx
- [x] Upcoming upgrades: Pectra, Verkle, Danksharding, Single Slot Finality
- [x] Status badges (Planning/Testing/Scheduled)
- [x] Links to Forkcast and specs

### Audio Layer
- [x] Play/pause button (bottom left, unobtrusive) — AudioPlayer.tsx
- [x] Yuri Petrovski "The Cyberpunk Runner" via YouTube embed
- [ ] Music evolves as you scroll through eras (future enhancement)
  - Early Ethereum = minimal/ambient
  - DeFi summer = more intense
  - Present = full cyberpunk

### Embedded Media
- [ ] Audio clips at key moments (Vitalik introducing rollup roadmap)
- [ ] Video embeds from DevCon talks
- [ ] Sound effects for animations
- [ ] Primary sources > summaries

### AI Chat Interface
- [ ] Ask questions in context
- [ ] Summarization, clarification
- [ ] "Explain this to me"
- [ ] Makes dense info accessible

---

## Data Sources (Full List)

### GitHub (API access ✅)
- ethereum/EIPs
- ethereum/pm (AllCoreDevs notes, Network-Upgrade-Archive)

### Blogs & Research
- Vitalik's blog (vitalik.eth.limo)
- ethresear.ch (Discourse API)
- Ethereum Cat Herders

### Social/Human Layer
- Twitter/X archives (Vitalik, Danny Ryan, Tim Beiko, Hudson Jameson)
- ethereum-magicians forum
- Reddit r/ethereum milestone posts
- Discord/Gitter archives if accessible

### Video/Audio Primary Sources
- DevCon talks (YouTube, archive.org)
- ETHGlobal presentations
- Bankless/podcast interviews
- Research day presentations

### DevCon & DevConnect Events
Link to archive.org or live sources:
- DevCon 0 (Berlin, 2014)
- DevCon 1 (London, 2015)
- DevCon 2 (Shanghai, 2016)
- DevCon 3 (Cancún, 2017)
- DevCon 4 (Prague, 2018)
- DevCon 5 (Osaka, 2019)
- DevCon 6 (Bogotá, 2022)
- DevCon 7 (Bangkok, 2024)
- DevConnect (Amsterdam 2022, Istanbul 2023, etc.)

Sources:
- https://archive.devcon.org/ (official archive)
- https://devcon.org/
- YouTube playlists for each event
- archive.org for historical sites

### L2Beat (Primary Source for L2 Data)
**https://l2beat.com/** — Layer 2 Analytics & Risk Analysis
- TVL, activity, and risk assessments for all major L2s
- Use for L2 milestone links (e.g., l2beat.com/scaling/projects/optimism)
- Risk framework explanations
- Historical data on L2 growth

### Forkcast.org (Primary Source for Recent Data)
**https://forkcast.org/** — Ethereum Upgrade Tracker
- AllCoreDevs call links and notes
- Fork specifications and timelines
- Discussion threads
- Use as primary link for recent hard forks and ACD calls

### Key Talks to Embed
- Vitalik's rollup-centric roadmap announcement (turning point!)
- The Merge countdown
- Major DevCon keynotes

### Cultural Artifacts (Celebration of Ethereum Culture)
**Documentaries/Films:**
- "Trust Machine" (2018)
- "Ethereum: The Infinite Garden" (2024)
- "Vitalik: An Ethereum Story"

**Books:**
- "The Cryptopians" — Laura Shin (2022)
- "Mastering Ethereum" — Andreas Antonopoulos & Gavin Wood
- "The Infinite Machine" — Camila Russo (2020)
- "Out of the Ether" — Matthew Leising

**Podcasts/Shows:**
- Bankless
- Unchained (Laura Shin)
- Zero Knowledge Podcast

**Art/NFTs:**
- Beeple's Everydays
- CryptoPunks launch (already in timeline)
- Art Blocks generative art (added: Art Blocks Launch, Nov 2020)

*Goal: This isn't just a technical timeline — it's a celebration of Ethereum culture.*

---

## TODO: Primary Source Links for Each Event

**Task:** Replace generic "Learn More → ethereum.org" with actual primary sources.

For each event, find:
1. **Archive.org links** — original websites/pages at the time (e.g., MakerDAO site circa 2017)
2. **Current site** — if still exists, clearly labeled as "current"
3. **Blog posts/announcements** — official announcements, Vitalik posts, etc.
4. **Discussion threads** — Reddit, Twitter, forum archives
5. **Technical specs** — EIPs, GitHub PRs, specs

**Priority events to source:**

**L2 launches (link to L2Beat + official sites):**
- [x] Optimism → l2beat.com/scaling/projects/optimism + optimism.io
- [x] Arbitrum → l2beat.com/scaling/projects/arbitrum + arbitrum.io
- [x] Base → l2beat.com/scaling/projects/base + base.org
- [x] zkSync Era → l2beat.com/scaling/projects/zksync-era + zksync.io
- [x] Linea → l2beat.com/scaling/projects/linea + linea.build
- [x] Scroll → l2beat.com/scaling/projects/scroll + scroll.io

**DeFi/App launches:**
- [x] MakerDAO launch — archive.org of original site (already had links)
- [x] Uniswap V1/V2/V3 — Hayden Adams announcements (already had links)
- [x] Frontier Launch — genesis block, blog announcement, ethereum.org
- [x] Homestead — block link, blog, EIP-2
- [x] Byzantium — block link, blog, zkSNARK EIPs
- [x] Beacon Chain Launch — genesis, deposit contract, ethereum.org
- [x] Yearn Finance — Andre Cronje medium post, YFI token
- [x] CryptoKitties — archive.org, current site, BBC coverage
- [ ] All hard forks — ethereum/pm specs, EIP links (partial - major ones done)
- [x] The Merge — Last PoW/First PoS blocks, ethereum.org, Vitalik thread
- [x] DeFi Summer (Compound COMP) — Medium announcement, Coindesk coverage
- [x] NFT boom (Beeple) — Christie's auction page, NYT coverage, IPFS artwork

---

## Data Sources & Feature Ideas (from ethereumdashboards.com review)

*Pre-populate as static JSON. Scripts fetch → save → app loads.*
*Ordered by priority: most interesting/informative/important first.*

### Priority 1: Core Context (High Impact, Every Event Benefits)
- [x] **1. Historic Gas + USD Context** — In detail view: avg gas price at that block + USD value of a typical tx. Makes every event tangible. (Implemented 2026-03-10 with 17 milestone blocks. Expand with `npm run fetch-gas` + Etherscan key)
- [x] **2. Block Links to Etherscan** — Every blockNumber becomes a clickable link in DetailPanel. ✓
- [x] **3. ETH Supply Animation** — Canvas chart showing supply growth from 72M genesis to ~120M present. Color-coded inflationary/deflationary periods. Highlights The Merge inflection point. (Implemented 2026-03-10)
- [x] **4. ETH Burned Counter** — Running total of ETH burned since EIP-1559. Dramatic visualization of value accrual.

### Priority 2: The Scaling Story (Visually Compelling)
- [x] **5. Blob Bubbles** — Floating translucent bubbles in background, appearing after Dencun. Wobble + float animation. ✓
- [x] **6. L2 vs L1 Transaction Crossing** — Crossing line chart showing L2 daily txs surpassing L1 (June 2024). Highlights Dencun impact. (Implemented 2026-03-10)
- [ ] **7. DeFi TVL "Water Level"** — Background visualization of TVL rising like water; dramatic spike during DeFi Summer 2020. (DeFiLlama)
- [x] **8. Gas Limit Growth Band** — Subtle expanding band showing gas limit increasing over time. (Implemented 2026-03-31: Left-side vertical band with milestone markers)

### Priority 3: Network Health & Decentralization
- [x] **9. Validator Growth Chart** — Background viz showing validator count growing from 21k at Beacon launch to 1M+. (Implemented 2026-03-31: Right-side panel with dot grid visualization)
- [ ] **10. Client Diversity Evolution** — Animated pie chart showing client diversity improving (or concerning supermajority periods). (Ethernets/NodeWatch)
- [x] **11. Uptime Counter** — "Ethereum has been running for X,XXX days without downtime." Pride metric. (ethereumuptime.org)
- [ ] **12. Censorship Watch** — OFAC-compliant block percentage over time. Important neutrality story. Tornado Cash impact. (MEVWatch)

### Priority 4: Key Milestones to Add as Events
- [x] **13. Staking Milestones** — Added 500k validators (Jan 2023) and 1M validators (March 2024)
- [x] **14. DeFi TVL Milestones** — Added: $1B (Feb 2020), $10B (Sept 2020), $100B (Oct 2021), ATH ~$177B (Nov 2021)
- [x] **15. MEV Timeline** — Added Flashbots launch (Nov 2020) and MEV-Boost (Sept 2022)
- [x] **16. L2 Security Stages** — Added Optimism Stage 1 (June 2024), Arbitrum Stage 1/BoLD (Feb 2025)
- [x] **17. Adoption Milestones** — Added PayPal PYUSD (Aug 2023), Spot ETH ETFs (July 2024)

### Priority 5: Protocol Deep Links
- [x] **18. ACD Call Links** — Link each hard fork to the AllCoreDevs calls where it was discussed/finalized. (Started: added links for London, Shanghai, Dencun)
- [ ] **19. EIP Status Tracker** — Show EIP lifecycle (Draft → Review → Final) for related EIPs. (EIPs Insight)
- [ ] **20. Beacon Chain Links** — Post-Merge events link to beacon slot on beaconcha.in.
- [ ] **21. Roadmap Tags** — Tag events as Surge/Verge/Purge/Splurge. (ethroadmap.com)

### Priority 6: Economic Indicators
- [ ] **22. Stablecoin Supply Growth** — Growing bar for total stablecoin supply on Ethereum. (stablecoins.wtf)
- [ ] **23. Issuance Rate Changes** — Show annual issuance % dropping: 4.5% PoW → 0.5% PoS → sometimes negative.
- [ ] **24. Flippening Progress** — Optional: ETH vs BTC market cap ratio. (Flippening Watch)
- [ ] **25. RWA Growth** — Tokenized real-world assets growing. (RWA.xyz)

### Priority 7: Advanced Visualizations
- [ ] **26. Blob Saturation Meter** — Pulsing indicator when blobs near capacity. (blobs.money)
- [ ] **27. L2 TVL Race** — Racing bar chart of L2s competing for TVL. (L2BEAT)
- [ ] **28. Staking Queue Drama** — Highlight periods of massive validator entry/exit queues.
- [ ] **29. Block Building Animation** — Visualize how blocks are built differently in MEV-Boost era.
- [ ] **30. Cost Time Machine** — Widget: "What would this tx cost today vs at this block?"

### Priority 8: Fun & Experimental
- [ ] **31. Emoji Block Preview** — Show emoji representation of historic blocks. (Emoji Blocks)
- [ ] **32. Live Gas Tracker** — Real-time current gas indicator (exception to pre-populate rule).
- [ ] **33. Developer Activity Viz** — GitHub contribution growth over time. (Open Source Observer)
- [ ] **34. Decentralization Health Score** — Composite health meter. (Project Sunshine)

### Data Sources Reference
| Data | Source | API |
|------|--------|-----|
| Historic gas prices | Etherscan | etherscan.io/apis |
| ETH/USD prices | CoinGecko | coingecko.com/api/v3 |
| Blob data | Dune/BlobScan | dune.com, blobscan.com/api |
| L2 TVL & stages | L2Beat | l2beat.com/api |
| Staking stats | Beaconcha.in | beaconcha.in/api/v1 |
| DeFi TVL | DeFiLlama | api.llama.fi |
| Client diversity | Ethernets | ethernets.io |
| MEV/censorship | Flashbots/MEVWatch | transparency.flashbots.net |
| Stablecoins | stablecoins.wtf | API TBD |
| Uptime | ethereumuptime.org | static |

---

### Ethereum Conferences & Events
**Task:** Add major Ethereum ecosystem conferences beyond DevCon.

Events to add:
- [x] **ETHCC** — Added ETHCC 1 (2018) and ETHCC 5 (2022)
- [x] **ETH Denver** — Added ETH Denver 2020 and 2024
- [x] **DevConnect** — Amsterdam 2022, Istanbul 2023, Argentina 2025
- [x] **ETHGlobal hackathons** — Added ETHWaterloo 2017, ETHSanFrancisco 2018, ETHNewYork 2019, ETHBerlin 2018
- [ ] **EthereumConf** — Early conferences (may not exist as distinct series)
- [x] **EDCON** — Added EDCON 2017 (Paris), EDCON 2018 (Toronto), EDCON 2024 (Tokyo)
- [x] **DappCon** — Added DappCon 2018, DappCon 2019 (Berlin)
- [ ] **More regional events** — Ongoing additions

Include: dates, locations, notable announcements, links to recordings/recaps.

---

### Early History Research (The Cryptopians)
**Task:** Review Laura Shin's "The Cryptopians" for pre-launch events to add.

Key events to research and add:
- [ ] Co-founder dynamics and departures (Charles Hoskinson leaving, etc.)
- [x] Legal formation (Ethereum Foundation in Switzerland) — Stiftung Ethereum, Zug, July 2014
- [x] Olympic testnet (May 2015) — Added with bounty program details
- [ ] Vitalik's early Bitcoin Magazine articles
- [ ] More detail on The Spaceship period
- [x] Yellow Paper publication (Gavin Wood) — Added with links to PDF and GitHub
- [ ] Early community formation

### AllCoreDevs Calls (Big Task)
**Add ALL ACD calls to the timeline as filterable events.**

Data sources:
- `ethereum/pm` repo — meeting notes in markdown
- Forkcast.org — structured call data
- YouTube — recordings

Implementation:
- Automate ingestion from ethereum/pm repo
- Each call becomes a timeline event with type `acd_call`
- Tag: `protocol`
- Links: YouTube recording, meeting notes, agenda
- Filter toggle to show/hide ACD calls (there are 200+)

This is a data aggregation task — perfect for the Rust backend.

---

## Architecture

### Data Pipeline (Pre-populated, not on-the-fly)
**Principle:** Avoid fetching data at runtime. Pre-populate static JSON files.

```
scripts/fetch-data/
├── fetch-gas-prices.ts    # Historic gas from Etherscan API
├── fetch-eth-prices.ts    # Historic ETH/USD from CoinGecko
├── fetch-blob-data.ts     # Blob stats from Dune/BlobScan
├── fetch-l2-tvl.ts        # L2 TVL from L2Beat API
├── fetch-staking.ts       # Validator counts from Beaconcha.in
└── ...

src/data/
├── timeline.ts            # Events (manual + generated)
├── gas-history.json       # Pre-fetched gas prices per block
├── eth-prices.json        # Pre-fetched ETH/USD prices
├── blob-stats.json        # Pre-fetched blob data
└── ...
```

**For contributors:**
- `npm run fetch-data` — regenerate all static data files
- Scripts are documented with API sources
- No API keys needed at runtime (only for data regeneration)
- CI can periodically refresh data

### Backend (Rust) — Future
- API aggregating/caching sources
- Block ↔ timestamp conversion
- Search/browse endpoints

### Frontend (React + TypeScript)
- Timeline UI
- Animation layer
- Audio player
- Live block feed (only exception: real-time blocks)

### Principles
- Links > copies (point to canonical sources)
- Block numbers as primary index
- Phased delivery (always shippable)
- **Pre-populate data, easy regeneration**

---

## Operating Model

1. **Work async** — nights/heartbeats
2. **Surface decisions cleanly** — A/B options with visuals
3. **Don't go too far** — check in on big decisions
4. **Keep docs updated** — this file, VISION.md

---

*Last updated: 2026-01-31*
