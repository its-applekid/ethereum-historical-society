//! Data caching layer

use moka::future::Cache;
use std::time::Duration;

/// Cache for API responses
pub struct DataCache {
    /// General string cache (JSON responses)
    pub responses: Cache<String, String>,
}

impl DataCache {
    pub fn new() -> Self {
        Self {
            responses: Cache::builder()
                .max_capacity(1000)
                .time_to_live(Duration::from_secs(300)) // 5 minute TTL
                .build(),
        }
    }

    pub async fn get(&self, key: &str) -> Option<String> {
        self.responses.get(key).await
    }

    pub async fn set(&self, key: String, value: String) {
        self.responses.insert(key, value).await;
    }

    pub async fn invalidate(&self, key: &str) {
        self.responses.invalidate(key).await;
    }
}

impl Default for DataCache {
    fn default() -> Self {
        Self::new()
    }
}
