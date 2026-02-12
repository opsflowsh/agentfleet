# Frontend Specification - AgentFleet Control Plane

## Overview
AgentFleet Control Plane is a web application that allows users to create, manage, and monitor AI agent fleets through OpenClaw. This document specifies the required pages, routes, and functionality.

## Core Routes & Pages

### 1. Landing Page - `/`
**Purpose**: Marketing page showcasing AgentFleet capabilities
**Functionality**:
- Hero section with value proposition
- Live demo preview
- Feature highlights
- Community milestones (GitHub stars)
- Feature voting widget
- Call-to-action to sign up/try demo

### 2. Live Demo - `/demo`
**Purpose**: Interactive demo without authentication
**Functionality**:
- Pre-configured sample fleet running
- Real-time agent activity visualization
- Sample task execution
- "Create Your Own Fleet" CTA

### 3. Dashboard - `/dashboard`
**Purpose**: Main control panel after login
**Functionality**:
- Fleet overview cards
- Quick stats (active agents, tasks completed, etc.)
- Recent activity feed
- Quick actions (create fleet, deploy agent, etc.)

### 4. Fleet Builder - `/fleet/new`
**Purpose**: Create new agent fleets
**Functionality**:
- Step-by-step wizard
- Agent template selection
- Drag-and-drop fleet designer
- Agent configuration forms
- Name and describe fleet
- Deploy to OpenClaw button

### 5. Fleet Editor - `/fleet/:id/edit`
**Purpose**: Modify existing fleets
**Functionality**:
- Visual node editor
- Add/remove agents
- Configure agent relationships
- Update agent parameters
- Save and deploy changes

### 6. Fleet Monitor - `/fleet/:id`
**Purpose**: Real-time fleet monitoring
**Functionality**:
- Agent status cards (active/idle/error)
- Live log streaming
- Performance metrics graphs
- Task queue visualization
- Inter-agent communication flow
- Start/stop/restart controls

### 7. Agent Library - `/agents`
**Purpose**: Browse available agent templates
**Functionality**:
- Grid/list view of agent templates
- Search and filter (by type, capabilities)
- Preview agent capabilities
- "Add to Fleet" action
- Community ratings

### 8. Agent Details - `/agents/:id`
**Purpose**: Detailed agent information
**Functionality**:
- Agent description and capabilities
- Configuration parameters
- Usage examples
- Performance benchmarks
- Reviews and ratings
- "Use This Agent" button

### 9. Fleet Templates - `/templates`
**Purpose**: Pre-built fleet configurations
**Functionality**:
- Template gallery (DevOps, QA, Support, etc.)
- Preview fleet structure
- One-click deploy
- Fork and customize

### 10. Analytics - `/analytics`
**Purpose**: Fleet performance insights
**Functionality**:
- Fleet performance overview
- Agent productivity metrics
- Cost analysis
- Task completion rates
- Historical trends
- Export reports

### 11. Settings - `/settings`
**Purpose**: User and fleet settings
**Functionality**:
- Profile management
- API key management
- OpenClaw connection settings
- Billing information
- Notification preferences

### 12. Documentation - `/docs`
**Purpose**: Help and API documentation
**Functionality**:
- Getting started guide
- API reference
- Video tutorials
- Example configurations
- FAQ section

## Required Components

### Global Components
- Navigation header with user menu
- Fleet selector dropdown
- Notification bell
- Search bar

### Dashboard Widgets
- Fleet status card
- Agent activity card
- Quick stats card
- Recent tasks list
- Performance graph

### Fleet Builder Components
- Agent palette (drag source)
- Canvas area (drop target)
- Property panel
- Connection lines
- Validation indicators

### Monitoring Components
- Agent status card
- Log viewer with filters
- Metrics charts
- Task progress bars
- Network diagram

## API Integration Points

All components will integrate with these backend APIs:

### Fleet Management
- GET /api/fleets - List user's fleets
- POST /api/fleets - Create new fleet
- GET /api/fleets/:id - Get fleet details
- PUT /api/fleets/:id - Update fleet
- DELETE /api/fleets/:id - Delete fleet
- POST /api/fleets/:id/deploy - Deploy to OpenClaw

### Agent Management
- GET /api/agents - List available agents
- GET /api/agents/:id - Get agent details
- GET /api/fleets/:id/agents - List fleet agents
- POST /api/fleets/:id/agents - Add agent to fleet
- DELETE /api/fleets/:id/agents/:agentId - Remove agent

### Monitoring
- GET /api/fleets/:id/status - Fleet status
- GET /api/fleets/:id/logs - Stream logs
- GET /api/fleets/:id/metrics - Performance metrics
- POST /api/fleets/:id/control - Start/stop/restart

### Analytics
- GET /api/analytics/overview - Dashboard stats
- GET /api/analytics/performance - Performance data
- GET /api/analytics/costs - Cost analysis

## Real-time Features

### WebSocket Connections
- /ws/fleet/:id - Fleet real-time updates
- /ws/logs/:id - Log streaming
- /ws/metrics/:id - Live metrics

### Events to Handle
- agent.status.changed
- task.started
- task.completed
- agent.error
- fleet.deployed

## Authentication Flow
1. Landing page → Sign up/Login
2. OAuth with GitHub/Google
3. Redirect to dashboard
4. Session management
5. API key for programmatic access

## State Management
- User authentication state
- Current fleet selection
- Real-time agent statuses
- WebSocket connections
- Form data for builders
- Analytics time ranges

## Error Handling
- API error messages
- Connection lost indicators
- Retry mechanisms
- Fallback UI states
- User-friendly error pages

## Performance Requirements
- Initial load < 3 seconds
- Real-time updates < 100ms latency
- Handle 100+ agents per fleet
- Smooth drag-and-drop at 60fps
- Efficient log streaming

## Accessibility
- Keyboard navigation
- Screen reader support
- High contrast mode
- Focus indicators
- Error announcements

## Responsive Design
- Desktop-first design
- Tablet-friendly layouts
- Mobile view for monitoring
- Touch-friendly controls
- Adaptive component sizing

This specification focuses on functionality, not aesthetics. The Builder.io team will handle visual design, typography, and styling.