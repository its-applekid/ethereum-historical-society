//! Data source aggregation
//!
//! Fetches and combines data from multiple sources:
//! - GitHub (EIPs, PM repo)
//! - ethresear.ch
//! - Live block data

pub mod github;
pub mod live_blocks;
pub mod ethresearch;

use crate::models::{BlockInfo, Eip, SourceStatus, TimelineEvent};
use anyhow::Result;
use chrono::Utc;
use std::sync::RwLock;

/// Aggregates data from all sources
pub struct SourceAggregator {
    github: github::GitHubSource,
    ethresearch: ethresearch::EthResearchSource,
    rpc_url: String,
    /// Cached timeline events
    timeline_cache: RwLock<Option<Vec<TimelineEvent>>>,
    /// Cached EIPs
    eips_cache: RwLock<Option<Vec<Eip>>>,
}

impl SourceAggregator {
    pub async fn new() -> Result<Self> {
        let rpc_url = std::env::var("ETH_RPC_URL")
            .unwrap_or_else(|_| "https://eth.llamarpc.com".into());

        Ok(Self {
            github: github::GitHubSource::new()?,
            ethresearch: ethresearch::EthResearchSource::new(),
            rpc_url,
            timeline_cache: RwLock::new(None),
            eips_cache: RwLock::new(None),
        })
    }

    /// Get the full timeline
    pub async fn get_timeline(&self) -> Result<Vec<TimelineEvent>> {
        // Check cache first
        if let Ok(cache) = self.timeline_cache.read() {
            if let Some(ref events) = *cache {
                return Ok(events.clone());
            }
        }

        // Fetch from sources and combine
        let mut events = Vec::new();

        // Add hardcoded core events (always available)
        events.extend(self.get_core_events());

        // Try to enrich with GitHub data
        if let Ok(eip_events) = self.github.fetch_eip_events().await {
            events.extend(eip_events);
        }

        // Sort by date
        events.sort_by(|a, b| a.date.cmp(&b.date));

        // Cache
        if let Ok(mut cache) = self.timeline_cache.write() {
            *cache = Some(events.clone());
        }

        Ok(events)
    }

    /// Get a single event by ID
    pub async fn get_event(&self, id: &str) -> Result<Option<TimelineEvent>> {
        let timeline = self.get_timeline().await?;
        Ok(timeline.into_iter().find(|e| e.id == id))
    }

    /// Get all EIPs
    pub async fn get_eips(&self) -> Result<Vec<Eip>> {
        // Check cache
        if let Ok(cache) = self.eips_cache.read() {
            if let Some(ref eips) = *cache {
                return Ok(eips.clone());
            }
        }

        let eips = self.github.fetch_eips().await?;

        // Cache
        if let Ok(mut cache) = self.eips_cache.write() {
            *cache = Some(eips.clone());
        }

        Ok(eips)
    }

    /// Get a single EIP
    pub async fn get_eip(&self, number: u32) -> Result<Option<Eip>> {
        let eips = self.get_eips().await?;
        Ok(eips.into_iter().find(|e| e.number == number))
    }

    /// Get current block info
    pub async fn get_current_block(&self) -> Result<BlockInfo> {
        live_blocks::fetch_current_block(&self.rpc_url).await
    }

    /// Get status of all data sources
    pub fn get_status(&self) -> Vec<SourceStatus> {
        vec![
            SourceStatus {
                name: "GitHub (EIPs)".into(),
                healthy: true,
                last_fetch: Some(Utc::now()),
                error: None,
                item_count: self.eips_cache.read().ok().and_then(|c| c.as_ref().map(|v| v.len())),
            },
            SourceStatus {
                name: "Ethereum RPC".into(),
                healthy: true,
                last_fetch: Some(Utc::now()),
                error: None,
                item_count: None,
            },
            SourceStatus {
                name: "ethresear.ch".into(),
                healthy: false,
                last_fetch: None,
                error: Some("Not yet implemented".into()),
                item_count: None,
            },
        ]
    }

    /// Core hardcoded events that are always available
    fn get_core_events(&self) -> Vec<TimelineEvent> {
        use crate::models::{Era, EventType, Importance};

        vec![
            TimelineEvent {
                id: "frontier-launch".into(),
                event_type: EventType::Milestone,
                date: "2015-07-30".into(),
                block_number: Some(0),
                title: "Frontier Launch".into(),
                summary: "Ethereum mainnet goes live. The genesis block is mined.".into(),
                era: Era::Frontier,
                importance: Importance::Major,
                related_eips: None,
                content: Some("Ethereum officially launched on July 30, 2015.".into()),
                sources: None,
                tags: vec!["protocol".into(), "milestone".into()],
            },
            TimelineEvent {
                id: "the-merge".into(),
                event_type: EventType::Milestone,
                date: "2022-09-15".into(),
                block_number: Some(15_537_394),
                title: "The Merge".into(),
                summary: "Ethereum transitions from Proof of Work to Proof of Stake.".into(),
                era: Era::Merge,
                importance: Importance::Major,
                related_eips: None,
                content: Some("The Merge reduced Ethereum's energy consumption by 99.95%.".into()),
                sources: None,
                tags: vec!["protocol".into(), "milestone".into()],
            },
            TimelineEvent {
                id: "eip-4844".into(),
                event_type: EventType::HardFork,
                date: "2024-03-13".into(),
                block_number: Some(19_426_587),
                title: "Dencun (EIP-4844)".into(),
                summary: "Proto-Danksharding introduces blob transactions, reducing L2 costs 10-100x.".into(),
                era: Era::Cancun,
                importance: Importance::Major,
                related_eips: Some(vec![4844]),
                content: None,
                sources: None,
                tags: vec!["protocol".into(), "scaling".into()],
            },
        ]
    }
}
