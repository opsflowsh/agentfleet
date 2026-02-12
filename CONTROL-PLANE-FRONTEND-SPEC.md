# AgentFleet Control Plane - Frontend Specification

## Overview
The AgentFleet Control Plane is a WASM-based web application that provides a real-time interface for creating, deploying, and managing AI agent fleets through OpenClaw. This is the actual product users will use, not a marketing site.

## Technology Stack
- **Core**: WebAssembly (WASM) for performance-critical components
- **Framework**: React/Vue/Svelte with WASM bindings
- **State Management**: Redux/Zustand with WebSocket sync
- **Real-time**: WebSocket connections to OpenClaw
- **Visualization**: D3.js or Canvas for agent network graphs
- **UI Components**: Headless UI / Radix UI for accessibility

## Core Application Routes

### 1. Dashboard - `/app/dashboard`
**Purpose**: Real-time overview of all fleets
**Components**:
- Fleet status grid (active/inactive/error states)
- System health metrics
- Resource usage graphs (CPU, memory, API calls)
- Quick actions toolbar
- Alert notifications panel

### 2. Fleet Designer - `/app/fleet/design`
**Purpose**: Visual fleet creation interface
**Components**:
- Drag-and-drop agent palette
- Canvas with grid snap
- Agent property inspector
- Connection drawing tools
- Validation panel
- Template library sidebar
- JSON/YAML code view toggle

### 3. Fleet Manager - `/app/fleet/:fleetId`
**Purpose**: Manage running fleet
**Components**:
- Agent topology visualization (live network graph)
- Individual agent cards with status
- Real-time log streaming panel
- Metrics dashboard (requests/sec, latency, errors)
- Control panel (start/stop/restart/scale)
- Task queue visualization
- Inter-agent message flow diagram

### 4. Agent Composer - `/app/agent/new`
**Purpose**: Create custom agents
**Components**:
- Agent configuration form
- Capability selector
- Environment variable manager
- Secrets/credentials vault integration
- Test runner interface
- Version control integration

### 5. Monitoring Center - `/app/monitor`
**Purpose**: Fleet observability
**Components**:
- Multi-fleet overview dashboard
- Real-time metrics graphs
- Log aggregation with search
- Alert configuration
- Performance profiler
- Cost tracking dashboard

### 6. Task Manager - `/app/tasks`
**Purpose**: Task orchestration
**Components**:
- Task creation wizard
- Task queue visualization
- Priority management
- Task distribution graph
- Execution history
- Failed task debugger

## WASM Components

### Performance-Critical Modules (Built in Rust/Go → WASM)
1. **Agent State Machine**
   - Real-time state synchronization
   - State transition validation
   - Conflict resolution

2. **Message Router**
   - Inter-agent message routing logic
   - Message queuing and buffering
   - Protocol serialization/deserialization

3. **Metrics Aggregator**
   - High-frequency metric collection
   - Statistical computations
   - Time-series data compression

4. **Graph Layout Engine**
   - Force-directed graph calculations
   - Real-time position updates
   - Collision detection

## Real-time Features

### WebSocket Events
```javascript
// Fleet events
fleet.created
fleet.updated
fleet.deleted
fleet.status.changed

// Agent events  
agent.connected
agent.disconnected
agent.status.changed
agent.task.assigned
agent.task.completed
agent.error

// System events
system.alert
system.metric
system.log
```

### Data Synchronization
- Operational Transform for collaborative editing
- Conflict-free Replicated Data Types (CRDTs)
- Optimistic UI updates with rollback
- Delta compression for efficient updates

## UI Components Library

### Core Components
- `<FleetCanvas />` - Main design canvas
- `<AgentNode />` - Draggable agent representation
- `<ConnectionLine />` - Agent relationships
- `<MetricsGraph />` - Real-time charts
- `<LogStream />` - Streaming log viewer
- `<TaskQueue />` - Task visualization
- `<StatusIndicator />` - Health states
- `<ControlPanel />` - Action buttons

### Composite Components
- `<FleetTopology />` - Complete fleet visualization
- `<AgentInspector />` - Detailed agent view
- `<MonitoringDashboard />` - Metrics overview
- `<AlertManager />` - Notification center

## State Management

### Global State Structure
```typescript
interface AppState {
  user: UserState;
  fleets: FleetState[];
  agents: AgentState[];
  tasks: TaskState[];
  metrics: MetricsState;
  logs: LogState;
  websocket: WebSocketState;
  ui: UIState;
}
```

### Local Storage
- Fleet templates
- User preferences
- Recent activities
- Cached metrics

### Session Storage  
- Active WebSocket connections
- Temporary UI states
- Form data

## Integration Points

### OpenClaw Gateway API
- REST endpoints for CRUD operations
- WebSocket for real-time updates
- GraphQL for complex queries
- gRPC for high-performance operations

### Authentication
- OAuth 2.0 / OpenID Connect
- API key management
- Role-based access control
- Multi-tenant isolation

### External Services
- GitHub integration for agent code
- Docker registry for agent images
- Cloud provider APIs (AWS, GCP, Azure)
- Monitoring services (Datadog, Grafana)

## Performance Requirements

### WASM Modules
- < 10ms for graph layout updates
- < 5ms for message routing decisions
- < 1ms for state validations
- 60 FPS for animations

### UI Responsiveness
- < 100ms for user interactions
- < 500ms for dashboard load
- < 50ms for WebSocket message processing
- Smooth drag-and-drop at 60 FPS

### Scalability
- Handle 1000+ agents per fleet
- Support 100+ concurrent fleets
- Stream 10k logs/second
- Update metrics at 1Hz minimum

## Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation for all features
- Screen reader announcements
- High contrast mode
- Reduced motion option

## Browser Support
- Chrome 90+ (primary)
- Firefox 88+
- Safari 14+
- Edge 90+
- WebAssembly support required

## Development Considerations

### Build Pipeline
- Rust/Go → WASM compilation
- Tree shaking for JS bundles
- Code splitting by route
- Service worker for offline support
- Progressive Web App features

### Testing Strategy
- Unit tests for WASM modules
- Integration tests for API calls
- E2E tests for critical workflows
- Performance benchmarks
- Load testing for WebSocket

This specification defines the actual control plane application that users will interact with to manage their AI agent fleets, not the marketing website.