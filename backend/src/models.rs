//! Data models for the Ethereum Historical Society

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

/// Era of Ethereum's evolution
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "lowercase")]
pub enum Era {
    Frontier,
    Homestead,
    Metropolis,
    Istanbul,
    Beacon,
    Merge,
    Shanghai,
    Cancun,
}

/// Type of timeline event
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum EventType {
    HardFork,
    Eip,
    Research,
    Milestone,
    Scaling,
    Controversy,
    Application,
    Social,
}

/// Importance level of an event
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "lowercase")]
pub enum Importance {
    Major,
    Significant,
    Minor,
}

/// A timeline event
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TimelineEvent {
    pub id: String,
    #[serde(rename = "type")]
    pub event_type: EventType,
    pub date: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub block_number: Option<u64>,
    pub title: String,
    pub summary: String,
    pub era: Era,
    pub importance: Importance,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub related_eips: Option<Vec<u32>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub content: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub sources: Option<Vec<Source>>,
    /// Tags for filtering
    #[serde(default)]
    pub tags: Vec<String>,
}

/// Source reference
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Source {
    pub title: String,
    pub url: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub source_type: Option<String>,
}

/// EIP (Ethereum Improvement Proposal)
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Eip {
    pub number: u32,
    pub title: String,
    pub author: String,
    pub status: String,
    pub category: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub created: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub requires: Option<Vec<u32>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub abstract_text: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub motivation: Option<String>,
    pub url: String,
}

/// Current block information
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BlockInfo {
    pub number: u64,
    pub timestamp: u64,
    pub hash: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub transaction_count: Option<u32>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub gas_used: Option<u64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub base_fee_gwei: Option<f64>,
}

/// Live block update message
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LiveBlockUpdate {
    pub block: BlockInfo,
    pub received_at: DateTime<Utc>,
}

/// Data source status
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceStatus {
    pub name: String,
    pub healthy: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub last_fetch: Option<DateTime<Utc>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub error: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub item_count: Option<usize>,
}

/// L2 chain information for visualization
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct L2Chain {
    pub id: String,
    pub name: String,
    pub launch_date: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub launch_block: Option<u64>,
    pub chain_type: L2Type,
    pub color: String,
    /// Current TVL in USD (for sizing the visual)
    #[serde(skip_serializing_if = "Option::is_none")]
    pub tvl_usd: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum L2Type {
    OptimisticRollup,
    ZkRollup,
    Validium,
    Plasma,
    StateChannel,
}

/// Known L2s with their launch dates
pub fn get_l2_chains() -> Vec<L2Chain> {
    vec![
        L2Chain {
            id: "optimism".into(),
            name: "Optimism".into(),
            launch_date: "2021-01-16".into(),
            launch_block: Some(12_686_786),
            chain_type: L2Type::OptimisticRollup,
            color: "#FF0420".into(),
            tvl_usd: None,
        },
        L2Chain {
            id: "arbitrum".into(),
            name: "Arbitrum One".into(),
            launch_date: "2021-08-31".into(),
            launch_block: Some(13_133_428),
            chain_type: L2Type::OptimisticRollup,
            color: "#28A0F0".into(),
            tvl_usd: None,
        },
        L2Chain {
            id: "base".into(),
            name: "Base".into(),
            launch_date: "2023-08-09".into(),
            launch_block: Some(17_880_000),
            chain_type: L2Type::OptimisticRollup,
            color: "#0052FF".into(),
            tvl_usd: None,
        },
        L2Chain {
            id: "zksync".into(),
            name: "zkSync Era".into(),
            launch_date: "2023-03-24".into(),
            launch_block: Some(16_890_000),
            chain_type: L2Type::ZkRollup,
            color: "#4E529A".into(),
            tvl_usd: None,
        },
        L2Chain {
            id: "polygon-zkevm".into(),
            name: "Polygon zkEVM".into(),
            launch_date: "2023-03-27".into(),
            launch_block: Some(16_900_000),
            chain_type: L2Type::ZkRollup,
            color: "#8247E5".into(),
            tvl_usd: None,
        },
        L2Chain {
            id: "linea".into(),
            name: "Linea".into(),
            launch_date: "2023-07-18".into(),
            launch_block: Some(17_720_000),
            chain_type: L2Type::ZkRollup,
            color: "#61DFFF".into(),
            tvl_usd: None,
        },
        L2Chain {
            id: "scroll".into(),
            name: "Scroll".into(),
            launch_date: "2023-10-17".into(),
            launch_block: Some(18_400_000),
            chain_type: L2Type::ZkRollup,
            color: "#FFEEDA".into(),
            tvl_usd: None,
        },
        // Historical (deprecated/abandoned)
        L2Chain {
            id: "plasma".into(),
            name: "Plasma (concept)".into(),
            launch_date: "2017-08-11".into(),
            launch_block: None,
            chain_type: L2Type::Plasma,
            color: "#888888".into(),
            tvl_usd: None,
        },
        L2Chain {
            id: "raiden".into(),
            name: "Raiden Network".into(),
            launch_date: "2017-12-01".into(),
            launch_block: None,
            chain_type: L2Type::StateChannel,
            color: "#666666".into(),
            tvl_usd: None,
        },
        // Ethereum Classic (fork)
        L2Chain {
            id: "etc".into(),
            name: "Ethereum Classic".into(),
            launch_date: "2016-07-20".into(),
            launch_block: Some(1_920_000),
            chain_type: L2Type::OptimisticRollup, // Not really, but for viz purposes
            color: "#34D399".into(),
            tvl_usd: None,
        },
    ]
}
