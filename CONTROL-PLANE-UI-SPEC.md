# AgentFleet Control Plane - UI Specification

## Product Vision
A professional web-based control plane for managing AI agent fleets. Think "AWS Console meets Kubernetes Dashboard" but for AI agents.

## UI Screens & Features

### 1. Login Screen
- OAuth login (GitHub, Google)
- API key option for CI/CD
- Remember me functionality

### 2. Main Dashboard
**Layout**: Sidebar navigation + Main content area

**Sidebar**:
- Fleet selector dropdown
- Navigation menu:
  - Overview
  - Fleets
  - Agents
  - Tasks
  - Logs
  - Settings

**Main Area**:
- Fleet health summary cards
- Active agents count
- Running tasks count  
- Resource usage graphs
- Recent activity feed

### 3. Fleet Management

#### Fleet List View
- Table/Grid toggle
- Columns: Name, Status, Agents, Created, Actions
- Quick actions: Start, Stop, Delete
- Search and filter options

#### Create Fleet Wizard
**Step 1: Basic Info**
- Fleet name
- Description
- Tags

**Step 2: Add Agents**
- Agent template cards
- Drag to add to fleet
- Configure each agent
- Set agent count

**Step 3: Configuration**
- Environment variables
- Secrets selection
- Resource limits
- Network settings

**Step 4: Review & Deploy**
- Configuration summary
- Validation results
- Deploy button

#### Fleet Detail View
**Tabs**:
1. **Overview**
   - Fleet topology visualization
   - Agent status cards
   - Quick metrics
   - Control buttons

2. **Agents**
   - List of agents with status
   - Individual agent cards showing:
     - Status (Running/Stopped/Error)
     - Current task
     - Resource usage
     - Logs preview
   - Actions: Restart, Stop, Remove, Logs

3. **Tasks**
   - Active tasks list
   - Task queue
   - Completed tasks
   - Failed tasks with errors

4. **Logs**
   - Unified log stream
   - Filter by agent
   - Search functionality
   - Log level filter
   - Download logs

5. **Metrics**
   - CPU usage graph
   - Memory usage graph
   - API calls graph
   - Task completion rate
   - Error rate

6. **Settings**
   - Fleet configuration
   - Scaling rules
   - Alert settings
   - Access control

### 4. Agent Library
- Grid of agent templates
- Categories: DevOps, Data, ML, Custom
- Each card shows:
  - Agent icon
  - Name and description
  - Capabilities
  - "Use Template" button
- Create custom agent button

### 5. Task Management
- Create new task form
- Task assignment rules
- Task priority queue
- Task history table
- Task detail modal with logs

### 6. Global Features

#### Header Bar
- Fleet selector (dropdown)
- Notifications bell
- User menu
- Help/Docs link

#### Real-time Indicators
- WebSocket connection status
- Last update timestamp
- Auto-refresh toggle

#### Command Palette (Cmd+K)
- Quick navigation
- Fleet search
- Agent search
- Common actions

## Component Specifications

### Fleet Topology Visualization
- Interactive node graph
- Nodes = Agents (circles)
- Edges = Communication paths
- Node colors = Status
- Click node = Agent details
- Drag to pan, scroll to zoom

### Agent Status Card
```
┌─────────────────────────────┐
│ 🟢 Agent-1         [⚙️] [🗑️] │
├─────────────────────────────┤
│ Type: Data Processor        │
│ Status: Running             │
│ Task: Processing batch #42  │
│ CPU: 45% | RAM: 256MB      │
│ Uptime: 2h 34m            │
└─────────────────────────────┘
```

### Log Viewer
```
┌─────────────────────────────┐
│ [Filter: All] [Level: Info] │
├─────────────────────────────┤
│ 12:34:01 [Agent-1] INFO:   │
│   Task completed: batch-42  │
│ 12:34:02 [Agent-2] DEBUG:  │
│   Requesting new task...    │
│ 12:34:03 [System] WARN:    │
│   High memory usage: 85%    │
└─────────────────────────────┘
```

### Metrics Chart
- Time-series line charts
- Multiple series support
- Hover for exact values
- Pan and zoom
- Export as PNG

## Interactions

### Drag & Drop
- Add agents to fleet
- Reorder agents
- Assign tasks to agents

### Context Menus
- Right-click on agent → Actions menu
- Right-click on task → Assign/Cancel

### Keyboard Shortcuts
- `Cmd/Ctrl + K` - Command palette
- `Cmd/Ctrl + /` - Toggle sidebar
- `R` - Refresh data
- `L` - Jump to logs
- `Esc` - Close modals

### Notifications
- Toast notifications for:
  - Fleet status changes
  - Agent errors
  - Task completions
  - System alerts

## Visual Design Guidelines

### Color Scheme
- Background: Dark gray (#1a1a1a)
- Cards: Lighter gray (#2a2a2a)
- Text: White/Light gray
- Success: Green (#10b981)
- Warning: Yellow (#f59e0b)
- Error: Red (#ef4444)
- Primary: Blue (#3b82f6)

### Typography
- Font: Inter or system font
- Headers: Bold
- Body: Regular
- Code: Monospace

### Spacing
- Consistent 8px grid
- Card padding: 16-24px
- Section spacing: 32px

### Icons
- Use Lucide React icons
- Consistent 20px size
- Proper spacing from text

## Responsive Design
- Desktop-first approach
- Minimum width: 1280px
- Tablet: Simplified layout
- Mobile: Read-only dashboard

## Loading States
- Skeleton screens for initial load
- Spinners for actions
- Progress bars for long operations
- Optimistic UI updates

## Error States
- Inline error messages
- Error boundaries
- Retry buttons
- Helpful error descriptions

This is the actual product interface that users will interact with to control their AI agent fleets.