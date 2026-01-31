//! Ethereum Historical Society Backend
//! 
//! Aggregates data from multiple sources:
//! - ethereum/EIPs repository
//! - ethereum/pm (Project Management) 
//! - ethresear.ch
//! - Vitalik's blog
//! - Live block data via JSON-RPC

use axum::{
    extract::{Path, State, WebSocketUpgrade},
    response::IntoResponse,
    routing::get,
    Json, Router,
};
use std::sync::Arc;
use tower_http::cors::CorsLayer;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

mod sources;
mod models;
mod cache;
mod block_time;

use sources::SourceAggregator;
use cache::DataCache;

#[derive(Clone)]
pub struct AppState {
    aggregator: Arc<SourceAggregator>,
    cache: Arc<DataCache>,
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Initialize tracing
    tracing_subscriber::registry()
        .with(tracing_subscriber::EnvFilter::new(
            std::env::var("RUST_LOG").unwrap_or_else(|_| "info".into()),
        ))
        .with(tracing_subscriber::fmt::layer())
        .init();

    tracing::info!("Starting Ethereum Historical Society backend");

    // Initialize data sources
    let aggregator = Arc::new(SourceAggregator::new().await?);
    let cache = Arc::new(DataCache::new());

    let state = AppState { aggregator, cache };

    // Build router
    let app = Router::new()
        // Timeline data
        .route("/api/timeline", get(get_timeline))
        .route("/api/timeline/:id", get(get_timeline_event))
        
        // EIP data
        .route("/api/eips", get(get_eips))
        .route("/api/eips/:number", get(get_eip))
        
        // Block utilities
        .route("/api/block/at/:timestamp", get(get_block_at_timestamp))
        .route("/api/block/current", get(get_current_block))
        
        // Live block WebSocket
        .route("/api/blocks/live", get(live_blocks_ws))
        
        // Data sources status
        .route("/api/sources/status", get(get_sources_status))
        
        // CORS for frontend
        .layer(CorsLayer::permissive())
        .with_state(state);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3001").await?;
    tracing::info!("Backend listening on http://localhost:3001");
    
    axum::serve(listener, app).await?;
    Ok(())
}

// ============= Route Handlers =============

async fn get_timeline(State(state): State<AppState>) -> impl IntoResponse {
    match state.aggregator.get_timeline().await {
        Ok(timeline) => Json(timeline).into_response(),
        Err(e) => {
            tracing::error!("Failed to get timeline: {}", e);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response()
        }
    }
}

async fn get_timeline_event(
    State(state): State<AppState>,
    Path(id): Path<String>,
) -> impl IntoResponse {
    match state.aggregator.get_event(&id).await {
        Ok(Some(event)) => Json(event).into_response(),
        Ok(None) => axum::http::StatusCode::NOT_FOUND.into_response(),
        Err(e) => {
            tracing::error!("Failed to get event {}: {}", id, e);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response()
        }
    }
}

async fn get_eips(State(state): State<AppState>) -> impl IntoResponse {
    match state.aggregator.get_eips().await {
        Ok(eips) => Json(eips).into_response(),
        Err(e) => {
            tracing::error!("Failed to get EIPs: {}", e);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response()
        }
    }
}

async fn get_eip(
    State(state): State<AppState>,
    Path(number): Path<u32>,
) -> impl IntoResponse {
    match state.aggregator.get_eip(number).await {
        Ok(Some(eip)) => Json(eip).into_response(),
        Ok(None) => axum::http::StatusCode::NOT_FOUND.into_response(),
        Err(e) => {
            tracing::error!("Failed to get EIP {}: {}", number, e);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response()
        }
    }
}

async fn get_block_at_timestamp(
    State(_state): State<AppState>,
    Path(timestamp): Path<i64>,
) -> impl IntoResponse {
    let block = block_time::timestamp_to_block(timestamp);
    Json(serde_json::json!({
        "timestamp": timestamp,
        "estimated_block": block,
        "confidence": "approximate"
    }))
}

async fn get_current_block(State(state): State<AppState>) -> impl IntoResponse {
    match state.aggregator.get_current_block().await {
        Ok(block) => Json(block).into_response(),
        Err(e) => {
            tracing::error!("Failed to get current block: {}", e);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, e.to_string()).into_response()
        }
    }
}

async fn live_blocks_ws(
    ws: WebSocketUpgrade,
    State(state): State<AppState>,
) -> impl IntoResponse {
    ws.on_upgrade(move |socket| sources::live_blocks::handle_live_blocks(socket, state.aggregator))
}

async fn get_sources_status(State(state): State<AppState>) -> impl IntoResponse {
    Json(state.aggregator.get_status())
}
