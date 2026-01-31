# Ethereum Historical Society 🏛️⛓️

An educational, historical, and artistic journey through Ethereum's evolution — from genesis to present.

## Vision

A timeline experience that:
- **Educates** — What is Ethereum and why does it matter?
- **Documents** — The design evolution and tradeoffs over 10+ years
- **Inspires** — An art piece that makes blockchain history tangible

The timeline is indexed by **block numbers**, not just dates — reinforcing that the blockchain *is* a clock.

[Read the full vision →](./VISION.md)

## Features (Planned)

- 📜 **Historical Timeline** — Hard forks, EIPs, and milestones anchored to blocks
- 🔄 **Live Block Feed** — Scroll to the bottom and watch blocks being added
- 🏷️ **Tag Filtering** — Focus on protocol, DeFi, NFT, social, or the full experience
- 🎬 **"On Rails" Mode** — Click play and watch Ethereum evolve
- 💬 **AI Chat** — Ask questions about the history
- 🎵 **Ambient Soundtrack** — Cyberpunk vibes for the journey

## Tech Stack

- **Backend:** Rust (Axum/Actix)
- **Frontend:** Vue + TypeScript + Tailwind + shadcn
- **Data:** EIPs, ethereum/pm, hard fork specs, social archives

## Data Sources

- [ethereum/EIPs](https://github.com/ethereum/EIPs) — Improvement proposals
- [ethereum/pm](https://github.com/ethereum/pm) — AllCoreDevs notes, upgrade archives
- Hard fork block numbers — Genesis through Dencun
- Vitalik's blog, DevCon talks, key tweets (curated)

[See full data source inventory →](./DATA_SOURCES.md)

## Development

```bash
# Coming soon - scaffolding in progress
```

## Structure

```
├── VISION.md          # Full project vision
├── DATA_SOURCES.md    # Data source inventory
├── data/
│   └── hard-forks.json    # Hard fork milestones
└── src/
    ├── types.ts           # Core type definitions
    ├── block-utils.ts     # Timestamp ↔ block conversion
    └── fetch-eips.ts      # EIP fetcher script
```

## License

MIT

---

*Built with 🍎 by [Applekid](https://github.com/its-applekid) and [Everdred](https://github.com/its-everdred)*
