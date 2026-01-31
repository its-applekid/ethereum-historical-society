//! ethresear.ch data source
//!
//! Fetches research posts from Ethereum Research forum (Discourse-based)

use crate::models::TimelineEvent;
use anyhow::Result;
use reqwest::Client;
use serde::Deserialize;

pub struct EthResearchSource {
    client: Client,
    base_url: String,
}

#[derive(Deserialize)]
struct DiscourseTopicList {
    topic_list: TopicList,
}

#[derive(Deserialize)]
struct TopicList {
    topics: Vec<DiscourseTopic>,
}

#[derive(Deserialize)]
struct DiscourseTopic {
    id: u32,
    title: String,
    slug: String,
    created_at: String,
    views: u32,
    like_count: u32,
    posts_count: u32,
    category_id: u32,
}

impl EthResearchSource {
    pub fn new() -> Self {
        Self {
            client: Client::builder()
                .user_agent("eth-history-backend")
                .build()
                .unwrap(),
            base_url: "https://ethresear.ch".into(),
        }
    }

    /// Fetch top research topics
    pub async fn fetch_top_topics(&self, limit: usize) -> Result<Vec<DiscourseTopic>> {
        let url = format!("{}/top.json", self.base_url);
        
        let response = self.client.get(&url).send().await?;
        
        if !response.status().is_success() {
            anyhow::bail!("ethresear.ch API error: {}", response.status());
        }

        let data: DiscourseTopicList = response.json().await?;
        
        Ok(data.topic_list.topics.into_iter().take(limit).collect())
    }

    /// Fetch topics by category
    pub async fn fetch_category(&self, category_slug: &str) -> Result<Vec<DiscourseTopic>> {
        let url = format!("{}/c/{}.json", self.base_url, category_slug);
        
        let response = self.client.get(&url).send().await?;
        
        if !response.status().is_success() {
            anyhow::bail!("ethresear.ch category fetch error: {}", response.status());
        }

        let data: DiscourseTopicList = response.json().await?;
        
        Ok(data.topic_list.topics)
    }

    /// Convert topics to timeline events
    pub fn topics_to_events(&self, topics: Vec<DiscourseTopic>) -> Vec<TimelineEvent> {
        use crate::models::{Era, EventType, Importance, Source};

        topics
            .into_iter()
            .filter(|t| t.like_count > 50) // Only significant posts
            .map(|topic| {
                let importance = if topic.like_count > 200 {
                    Importance::Major
                } else if topic.like_count > 100 {
                    Importance::Significant
                } else {
                    Importance::Minor
                };

                TimelineEvent {
                    id: format!("ethresearch-{}", topic.id),
                    event_type: EventType::Research,
                    date: topic.created_at.split('T').next().unwrap_or("").to_string(),
                    block_number: None,
                    title: topic.title.clone(),
                    summary: format!("{} views, {} likes", topic.views, topic.like_count),
                    era: Era::Merge, // Would need to determine from date
                    importance,
                    related_eips: None,
                    content: None,
                    sources: Some(vec![Source {
                        title: topic.title,
                        url: format!("{}/t/{}/{}", self.base_url, topic.slug, topic.id),
                        source_type: Some("ethresear.ch".into()),
                    }]),
                    tags: vec!["research".into()],
                }
            })
            .collect()
    }
}

/// Key research categories to monitor
pub const IMPORTANT_CATEGORIES: &[&str] = &[
    "proof-of-stake",
    "data-availability", 
    "sharding",
    "proposer-builder-separation",
    "verkle-trees",
    "mev",
];
