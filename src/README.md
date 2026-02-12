# AgentFleet Source Structure

## Directory Overview

```
src/
├── core/          # Core business logic and types
├── web/           # Web UI (React application)
├── api/           # REST API server
└── agents/        # Agent implementations and templates
```

## Core (`/core`)
Core functionality shared across all components:
- TypeScript types and interfaces
- Agent orchestration logic
- Mission management
- Communication protocols

## Web UI (`/web`)
React-based web interface:
- Agent creation and management
- Mission control dashboard
- Real-time updates via WebSocket
- Community voting system

## API (`/api`)
Express.js REST API:
- CRUD operations for agents and missions
- WebSocket server for real-time updates
- OpenClaw gateway integration
- Authentication and authorization

## Agents (`/agents`)
Agent templates and implementations:
- Base agent class
- Specialized agent templates
- Communication handlers
- Tool integrations