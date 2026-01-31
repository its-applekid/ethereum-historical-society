//! GitHub data source
//!
//! Fetches data from:
//! - ethereum/EIPs repository
//! - ethereum/pm repository (AllCoreDevs notes, network upgrades)

use crate::models::{Eip, TimelineEvent};
use anyhow::Result;
use reqwest::Client;
use serde::Deserialize;

pub struct GitHubSource {
    client: Client,
    token: Option<String>,
}

#[derive(Debug, Deserialize)]
struct GitHubContent {
    name: String,
    path: String,
    content: Option<String>,
    download_url: Option<String>,
}

impl GitHubSource {
    pub fn new() -> Result<Self> {
        let token = std::env::var("GITHUB_TOKEN").ok();
        let client = Client::builder()
            .user_agent("eth-history-backend")
            .build()?;

        Ok(Self { client, token })
    }

    /// Fetch EIPs from the ethereum/EIPs repository
    pub async fn fetch_eips(&self) -> Result<Vec<Eip>> {
        tracing::info!("Fetching EIPs from GitHub");

        let url = "https://api.github.com/repos/ethereum/EIPs/contents/EIPS";
        
        let mut request = self.client.get(url);
        if let Some(ref token) = self.token {
            request = request.header("Authorization", format!("Bearer {}", token));
        }

        let response = request.send().await?;
        
        if !response.status().is_success() {
            anyhow::bail!("GitHub API error: {}", response.status());
        }

        let contents: Vec<GitHubContent> = response.json().await?;
        
        let mut eips = Vec::new();
        
        // Parse EIP filenames (eip-1.md, eip-1559.md, etc.)
        for content in contents {
            if let Some(number) = parse_eip_number(&content.name) {
                // For now, just create basic EIP entries from filenames
                // Full content parsing would require fetching each file
                eips.push(Eip {
                    number,
                    title: format!("EIP-{}", number),
                    author: "".into(),
                    status: "".into(),
                    category: "".into(),
                    created: None,
                    requires: None,
                    abstract_text: None,
                    motivation: None,
                    url: format!("https://eips.ethereum.org/EIPS/eip-{}", number),
                });
            }
        }

        tracing::info!("Fetched {} EIPs", eips.len());
        Ok(eips)
    }

    /// Fetch EIP-related timeline events
    pub async fn fetch_eip_events(&self) -> Result<Vec<TimelineEvent>> {
        // For now, return empty - full implementation would parse EIP metadata
        // to extract creation dates, status changes, etc.
        Ok(vec![])
    }

    /// Fetch network upgrade info from ethereum/pm
    pub async fn fetch_network_upgrades(&self) -> Result<Vec<TimelineEvent>> {
        tracing::info!("Fetching network upgrades from ethereum/pm");

        let url = "https://api.github.com/repos/ethereum/pm/contents/Network-Upgrade-Archive";
        
        let mut request = self.client.get(url);
        if let Some(ref token) = self.token {
            request = request.header("Authorization", format!("Bearer {}", token));
        }

        let response = request.send().await?;
        
        if !response.status().is_success() {
            tracing::warn!("Failed to fetch network upgrades: {}", response.status());
            return Ok(vec![]);
        }

        let contents: Vec<GitHubContent> = response.json().await?;
        
        let mut events = Vec::new();
        
        for content in contents {
            // Parse upgrade names (London, Shanghai, etc.)
            if content.name.ends_with(".md") {
                let name = content.name.trim_end_matches(".md");
                tracing::debug!("Found upgrade: {}", name);
                // Would need to fetch and parse each file for full details
            }
        }

        Ok(events)
    }
}

fn parse_eip_number(filename: &str) -> Option<u32> {
    // Parse "eip-1559.md" -> 1559
    filename
        .strip_prefix("eip-")
        .and_then(|s| s.strip_suffix(".md"))
        .and_then(|s| s.parse().ok())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_eip_number() {
        assert_eq!(parse_eip_number("eip-1.md"), Some(1));
        assert_eq!(parse_eip_number("eip-1559.md"), Some(1559));
        assert_eq!(parse_eip_number("eip-4844.md"), Some(4844));
        assert_eq!(parse_eip_number("README.md"), None);
        assert_eq!(parse_eip_number("eip-abc.md"), None);
    }
}
