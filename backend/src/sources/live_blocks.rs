//! Live block data via JSON-RPC and WebSocket

use crate::models::BlockInfo;
use crate::sources::SourceAggregator;
use anyhow::Result;
use axum::extract::ws::{Message, WebSocket};
use futures::{SinkExt, StreamExt};
use reqwest::Client;
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use std::time::Duration;
use tokio::time::interval;

/// JSON-RPC request
#[derive(Serialize)]
struct JsonRpcRequest<T> {
    jsonrpc: &'static str,
    method: &'static str,
    params: T,
    id: u32,
}

/// JSON-RPC response
#[derive(Deserialize)]
struct JsonRpcResponse<T> {
    result: Option<T>,
    error: Option<JsonRpcError>,
}

#[derive(Deserialize)]
struct JsonRpcError {
    code: i32,
    message: String,
}

/// Block response from eth_getBlockByNumber
#[derive(Deserialize)]
struct RpcBlock {
    number: String,
    timestamp: String,
    hash: String,
    #[serde(rename = "transactionCount")]
    transaction_count: Option<String>,
    #[serde(rename = "gasUsed")]
    gas_used: Option<String>,
    #[serde(rename = "baseFeePerGas")]
    base_fee_per_gas: Option<String>,
}

/// Fetch current block info
pub async fn fetch_current_block(rpc_url: &str) -> Result<BlockInfo> {
    let client = Client::new();
    
    let request = JsonRpcRequest {
        jsonrpc: "2.0",
        method: "eth_getBlockByNumber",
        params: ("latest", false),
        id: 1,
    };

    let response = client
        .post(rpc_url)
        .json(&request)
        .send()
        .await?;

    let json: JsonRpcResponse<RpcBlock> = response.json().await?;

    if let Some(error) = json.error {
        anyhow::bail!("RPC error: {} ({})", error.message, error.code);
    }

    let block = json.result.ok_or_else(|| anyhow::anyhow!("No result in response"))?;

    Ok(BlockInfo {
        number: parse_hex_u64(&block.number)?,
        timestamp: parse_hex_u64(&block.timestamp)?,
        hash: block.hash,
        transaction_count: block.transaction_count
            .as_ref()
            .and_then(|s| parse_hex_u64(s).ok())
            .map(|n| n as u32),
        gas_used: block.gas_used
            .as_ref()
            .and_then(|s| parse_hex_u64(s).ok()),
        base_fee_gwei: block.base_fee_per_gas
            .as_ref()
            .and_then(|s| parse_hex_u64(s).ok())
            .map(|wei| wei as f64 / 1e9),
    })
}

/// Handle WebSocket connection for live block updates
pub async fn handle_live_blocks(socket: WebSocket, aggregator: Arc<SourceAggregator>) {
    let (mut sender, mut receiver) = socket.split();

    // Spawn a task to send block updates
    let send_task = tokio::spawn(async move {
        let mut interval = interval(Duration::from_secs(12)); // Ethereum block time
        
        loop {
            interval.tick().await;
            
            match aggregator.get_current_block().await {
                Ok(block) => {
                    let json = serde_json::to_string(&block).unwrap();
                    if sender.send(Message::Text(json)).await.is_err() {
                        break;
                    }
                }
                Err(e) => {
                    tracing::warn!("Failed to fetch block: {}", e);
                }
            }
        }
    });

    // Handle incoming messages (pings, close, etc.)
    while let Some(Ok(msg)) = receiver.next().await {
        match msg {
            Message::Close(_) => break,
            Message::Ping(data) => {
                // Pong is sent automatically by axum
            }
            _ => {}
        }
    }

    send_task.abort();
}

/// Parse hex string to u64
fn parse_hex_u64(s: &str) -> Result<u64> {
    let s = s.strip_prefix("0x").unwrap_or(s);
    u64::from_str_radix(s, 16).map_err(|e| anyhow::anyhow!("Invalid hex: {}", e))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_hex() {
        assert_eq!(parse_hex_u64("0x1").unwrap(), 1);
        assert_eq!(parse_hex_u64("0xff").unwrap(), 255);
        assert_eq!(parse_hex_u64("0xED14C5").unwrap(), 15_537_349);
    }
}
