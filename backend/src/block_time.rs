//! Block number <-> timestamp conversion utilities
//!
//! Ethereum block times have varied over the years:
//! - Pre-Merge (PoW): ~13-14 seconds average (highly variable)
//! - Post-Merge (PoS): Exactly 12 seconds per slot
//!
//! This module provides approximate conversions using anchor points.

/// The Merge block - our primary anchor point
const MERGE_BLOCK: u64 = 15_537_394;
const MERGE_TIMESTAMP: i64 = 1663224179; // 2022-09-15 06:42:59 UTC

/// Post-merge slot time (seconds)
const POST_MERGE_SLOT_TIME: i64 = 12;

/// Pre-merge average block time (approximate)
const PRE_MERGE_AVG_BLOCK_TIME: f64 = 13.5;

/// Known anchor points for better accuracy
const ANCHORS: &[(u64, i64)] = &[
    (0, 1438269973),              // Genesis: 2015-07-30 15:26:13 UTC
    (1_150_000, 1457981393),      // Homestead: 2016-03-14
    (1_920_000, 1469020840),      // DAO Fork: 2016-07-20
    (4_370_000, 1508131331),      // Byzantium: 2017-10-16
    (7_280_000, 1551383524),      // Constantinople: 2019-02-28
    (9_069_000, 1575764709),      // Istanbul: 2019-12-08
    (12_244_000, 1618481223),     // Berlin: 2021-04-15
    (12_965_000, 1628166822),     // London: 2021-08-05
    (MERGE_BLOCK, MERGE_TIMESTAMP),
    (17_034_870, 1681338455),     // Shanghai: 2023-04-12
    (19_426_587, 1710338135),     // Dencun: 2024-03-13
];

/// Convert a Unix timestamp to an approximate block number
pub fn timestamp_to_block(timestamp: i64) -> u64 {
    // Find the closest anchor points
    let (lower_anchor, upper_anchor) = find_surrounding_anchors(timestamp);
    
    if timestamp >= MERGE_TIMESTAMP {
        // Post-Merge: exact 12-second slots
        let seconds_since_merge = timestamp - MERGE_TIMESTAMP;
        let blocks_since_merge = (seconds_since_merge / POST_MERGE_SLOT_TIME) as u64;
        MERGE_BLOCK + blocks_since_merge
    } else {
        // Pre-Merge: interpolate between anchors
        let (anchor_block, anchor_time) = lower_anchor;
        let (next_block, next_time) = upper_anchor;
        
        // Calculate block time in this range
        let time_diff = (next_time - anchor_time) as f64;
        let block_diff = (next_block - anchor_block) as f64;
        let block_time = if block_diff > 0.0 { time_diff / block_diff } else { PRE_MERGE_AVG_BLOCK_TIME };
        
        // Interpolate
        let seconds_since_anchor = (timestamp - anchor_time) as f64;
        let blocks_since_anchor = (seconds_since_anchor / block_time) as u64;
        anchor_block + blocks_since_anchor
    }
}

/// Convert a block number to an approximate Unix timestamp
pub fn block_to_timestamp(block: u64) -> i64 {
    if block >= MERGE_BLOCK {
        // Post-Merge: exact 12-second slots
        let blocks_since_merge = block - MERGE_BLOCK;
        MERGE_TIMESTAMP + (blocks_since_merge as i64 * POST_MERGE_SLOT_TIME)
    } else {
        // Pre-Merge: interpolate between anchors
        let (lower_anchor, upper_anchor) = find_surrounding_anchors_by_block(block);
        let (anchor_block, anchor_time) = lower_anchor;
        let (next_block, next_time) = upper_anchor;
        
        // Calculate block time in this range
        let time_diff = (next_time - anchor_time) as f64;
        let block_diff = (next_block - anchor_block) as f64;
        let block_time = if block_diff > 0.0 { time_diff / block_diff } else { PRE_MERGE_AVG_BLOCK_TIME };
        
        // Interpolate
        let blocks_since_anchor = (block - anchor_block) as f64;
        let seconds_since_anchor = (blocks_since_anchor * block_time) as i64;
        anchor_time + seconds_since_anchor
    }
}

fn find_surrounding_anchors(timestamp: i64) -> ((u64, i64), (u64, i64)) {
    let mut lower = ANCHORS[0];
    let mut upper = ANCHORS[ANCHORS.len() - 1];
    
    for i in 0..ANCHORS.len() - 1 {
        if ANCHORS[i].1 <= timestamp && ANCHORS[i + 1].1 >= timestamp {
            lower = ANCHORS[i];
            upper = ANCHORS[i + 1];
            break;
        }
        if ANCHORS[i].1 > timestamp {
            break;
        }
        lower = ANCHORS[i];
    }
    
    (lower, upper)
}

fn find_surrounding_anchors_by_block(block: u64) -> ((u64, i64), (u64, i64)) {
    let mut lower = ANCHORS[0];
    let mut upper = ANCHORS[ANCHORS.len() - 1];
    
    for i in 0..ANCHORS.len() - 1 {
        if ANCHORS[i].0 <= block && ANCHORS[i + 1].0 >= block {
            lower = ANCHORS[i];
            upper = ANCHORS[i + 1];
            break;
        }
        if ANCHORS[i].0 > block {
            break;
        }
        lower = ANCHORS[i];
    }
    
    (lower, upper)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_merge_block() {
        assert_eq!(timestamp_to_block(MERGE_TIMESTAMP), MERGE_BLOCK);
    }

    #[test]
    fn test_post_merge() {
        // 12 seconds after merge = 1 block
        assert_eq!(timestamp_to_block(MERGE_TIMESTAMP + 12), MERGE_BLOCK + 1);
        // 120 seconds after merge = 10 blocks
        assert_eq!(timestamp_to_block(MERGE_TIMESTAMP + 120), MERGE_BLOCK + 10);
    }

    #[test]
    fn test_genesis() {
        let genesis_time = 1438269973;
        assert_eq!(timestamp_to_block(genesis_time), 0);
    }

    #[test]
    fn test_roundtrip() {
        // Test that block -> timestamp -> block gives same result (post-merge)
        let block = 16_000_000;
        let ts = block_to_timestamp(block);
        let block2 = timestamp_to_block(ts);
        assert_eq!(block, block2);
    }
}
