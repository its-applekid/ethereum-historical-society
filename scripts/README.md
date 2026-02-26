# Scripts — Data Fetching & Utilities

This folder contains scripts for pre-populating static data files used by TEA (The Ethereum Archive).

## Philosophy: Pre-populate, Don't Fetch at Runtime

**Why pre-populate?**
- Faster page loads (no API calls during user experience)
- No rate limiting issues for visitors
- Works offline / on static hosting
- Data regeneration is separate from deployment

**How it works:**
1. Scripts fetch data from various APIs
2. Results saved as static JSON in `src/data/`
3. Frontend imports and uses pre-fetched data
4. Regenerate data periodically (manual or CI)

## Available Scripts

### `fetch-context-data.ts`
**What it does:** Fetches historic gas prices and ETH/USD prices for key timeline events.

**Data sources:**
- Etherscan API — gas prices per block
- CoinGecko API — historic ETH/USD prices

**Output:** `src/data/block-context.json`

**Setup:**
```bash
# Get free Etherscan API key
# https://etherscan.io/apis
export ETHERSCAN_API_KEY=your_key_here

# Run the script
npm run fetch-context-data
```

**What you get:**
For each key block:
- Gas price (gwei)
- ETH price (USD)
- Typical tx cost (USD) — 21000 gas transfer

This makes every timeline event tangible: "The Merge happened when gas was 12 gwei and a simple transfer cost $0.84."

### `fetch-eips.ts`
**What it does:** Fetches EIP metadata from ethereum/EIPs repo.

**Usage:** (already exists, document here)

### `fetch-og-images.ts`
**What it does:** Generates Open Graph preview images for timeline events.

**Usage:** (already exists, document here)

## Future Scripts (Planned)

### `fetch-blob-data.ts`
- Blob stats from Dune/BlobScan
- Post-Dencun blob usage over time

### `fetch-l2-tvl.ts`
- L2 TVL from L2Beat API
- Track L2 growth milestones

### `fetch-staking.ts`
- Validator counts from Beaconcha.in
- Staking milestones (500k, 1M validators)

### `fetch-defi-tvl.ts`
- DeFi TVL from DeFiLlama
- Track DeFi Summer, ATH, current state

### `fetch-acd-calls.ts`
- AllCoreDevs calls from ethereum/pm repo
- 200+ calls to add as filterable timeline events

## Running All Scripts

```bash
# Regenerate all data
npm run fetch-all-data
```

(Coming soon — will run all fetch scripts in sequence)

## Contributing

When adding a new script:
1. Document data source + API requirements
2. Add to this README
3. Save output to `src/data/` as JSON
4. Add npm script to `package.json`
5. Handle rate limiting (sleep between requests)
6. Provide helpful console output (progress + results)

## API Keys Reference

| Service | Key Needed | Get It Here |
|---------|------------|-------------|
| Etherscan | Yes (free) | https://etherscan.io/apis |
| CoinGecko | No | https://coingecko.com/api |
| Beaconcha.in | No | https://beaconcha.in/api/v1 |
| L2Beat | No | https://l2beat.com/api |
| DeFiLlama | No | https://api.llama.fi |

## Rate Limiting Best Practices

- Sleep 200-500ms between requests
- Respect API tier limits
- Cache results aggressively
- Use batch endpoints when available
- Handle errors gracefully (log & continue)

---

**Last updated:** 2026-02-25
