# AgentFleet Control Plane - MVP Implementation Plan

## What We're Building
A WebAssembly-powered control plane for managing AI agent fleets through OpenClaw. Think "Kubernetes Dashboard but for AI Agents."

## MVP Scope (Phase 1)

### Core Features
1. **Fleet Creation**
   - Simple form to define fleet
   - Add agents from templates
   - Basic configuration
   - Deploy to OpenClaw

2. **Fleet Monitoring**  
   - Real-time agent status
   - Basic metrics (uptime, tasks)
   - Simple log viewer
   - Start/stop controls

3. **Agent Templates**
   - Pre-built agent types
   - Basic customization
   - Save custom templates

### Technical Architecture

#### Frontend Stack
```
- Vite + React + TypeScript
- WASM modules (Rust compiled)
- WebSocket client
- TailwindCSS + HeadlessUI
```

#### WASM Modules (Phase 1)
```rust
// 1. State Manager - Efficient state sync
mod state_manager {
    pub fn sync_agent_state() -> Result<AgentState>
    pub fn validate_fleet_config() -> Result<bool>
}

// 2. Message Router - Handle agent messages
mod message_router {
    pub fn route_message() -> Result<()>
    pub fn serialize_protocol() -> Vec<u8>
}

// 3. Metrics Engine - Process metrics
mod metrics_engine {
    pub fn aggregate_metrics() -> Metrics
    pub fn calculate_stats() -> Stats
}
```

## Application Structure

### Pages (MVP)
```
/app                     - Main app shell
/app/fleets             - List all fleets
/app/fleet/new          - Create fleet wizard
/app/fleet/:id          - Fleet dashboard
/app/fleet/:id/logs     - Log viewer
/app/templates          - Agent templates
```

### Components Architecture
```
src/
├── components/
│   ├── fleet/
│   │   ├── FleetCard.tsx
│   │   ├── FleetCreator.tsx
│   │   └── FleetDashboard.tsx
│   ├── agent/
│   │   ├── AgentCard.tsx
│   │   ├── AgentStatus.tsx
│   │   └── AgentConfig.tsx
│   ├── monitoring/
│   │   ├── LogViewer.tsx
│   │   ├── MetricsChart.tsx
│   │   └── StatusGrid.tsx
│   └── common/
│       ├── Layout.tsx
│       ├── Navigation.tsx
│       └── ErrorBoundary.tsx
├── wasm/
│   ├── state_manager.wasm
│   ├── message_router.wasm
│   └── metrics_engine.wasm
├── hooks/
│   ├── useWebSocket.ts
│   ├── useFleet.ts
│   └── useMetrics.ts
└── api/
    ├── openclaw.ts
    └── fleets.ts
```

## Data Flow

### 1. Fleet Creation Flow
```
User Input → React Form → Validate (WASM) → API Call → OpenClaw
                                    ↓
                            Update Local State
```

### 2. Real-time Monitoring
```
OpenClaw → WebSocket → Message Router (WASM) → State Update → React UI
                              ↓
                        Metrics Engine (WASM)
                              ↓
                        Analytics Dashboard
```

### 3. Control Commands
```
UI Action → Command Queue → WebSocket → OpenClaw → Agent
                ↓
        Optimistic Update
                ↓
        Confirmation/Rollback
```

## WebSocket Protocol

### Message Types
```typescript
interface WSMessage {
  type: 'agent.update' | 'fleet.status' | 'metric.push' | 'log.stream';
  fleetId: string;
  agentId?: string;
  data: any;
  timestamp: number;
}

// Examples
{ type: 'agent.update', fleetId: '123', agentId: 'agent-1', data: { status: 'active' }}
{ type: 'metric.push', fleetId: '123', data: { cpu: 45, memory: 512 }}
{ type: 'log.stream', fleetId: '123', agentId: 'agent-1', data: { message: 'Task completed' }}
```

## API Endpoints (MVP)

### Fleet Management
```
GET    /api/fleets              - List user's fleets
POST   /api/fleets              - Create new fleet
GET    /api/fleets/:id          - Get fleet details
PUT    /api/fleets/:id          - Update fleet
DELETE /api/fleets/:id          - Delete fleet
POST   /api/fleets/:id/deploy   - Deploy to OpenClaw
POST   /api/fleets/:id/stop     - Stop fleet
```

### Agent Operations
```
GET    /api/templates           - List agent templates
POST   /api/fleets/:id/agents   - Add agent to fleet
DELETE /api/fleets/:id/agents/:agentId - Remove agent
POST   /api/agents/:id/restart  - Restart agent
```

### Monitoring
```
GET    /api/fleets/:id/metrics  - Get metrics
GET    /api/fleets/:id/logs     - Get logs (paginated)
WS     /ws/fleet/:id            - Real-time updates
```

## UI/UX Priorities

### Design Principles
1. **Information Density** - Show lots of data efficiently
2. **Real-time Feel** - Instant updates, smooth animations
3. **Developer-Focused** - Terminal aesthetics, monospace fonts
4. **Keyboard-First** - Vim-style shortcuts
5. **Dark Mode Default** - Easy on the eyes

### Key Interactions
- Drag to reorder agents
- Click to inspect
- Hover for quick stats
- Right-click for actions
- Keyboard shortcuts for power users

## Performance Targets (MVP)

- Initial load: < 2 seconds
- WebSocket latency: < 100ms
- WASM execution: < 10ms
- 60 FPS during interactions
- Handle 50 agents smoothly

## Next Steps

### Phase 1 (MVP) - 2 weeks
- [ ] Basic fleet CRUD
- [ ] Simple monitoring dashboard  
- [ ] WebSocket integration
- [ ] 3 WASM modules
- [ ] 5 agent templates

### Phase 2 - 2 weeks
- [ ] Visual fleet designer
- [ ] Advanced metrics
- [ ] Log search/filter
- [ ] More agent templates
- [ ] Multi-fleet view

### Phase 3 - 2 weeks  
- [ ] Task orchestration
- [ ] Performance profiling
- [ ] Cost tracking
- [ ] Team collaboration
- [ ] API access

This is the REAL product - what users will actually use to control their AI agents!