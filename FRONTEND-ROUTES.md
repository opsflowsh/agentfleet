# Frontend Routes & Functionality

## Essential Pages (MVP)

### 1. Home Page - `/`
- Show what AgentFleet is
- Live stats from GitHub
- Feature voting section
- "Try Demo" and "Get Started" buttons

### 2. Demo - `/demo`
- Interactive demo showing 5 agents working
- No login required
- Sample tasks running
- "Create Your Fleet" button

### 3. Fleet Builder - `/fleet/new`
- Simple form to create a fleet:
  - Fleet name
  - Description  
  - Select agent templates
  - Configure each agent
  - Deploy button

### 4. Fleet Dashboard - `/fleet/:id`
- Show fleet status
- List of agents and their status
- Start/Stop buttons
- Basic logs view
- Activity feed

### 5. Documentation - `/docs`
- How to get started
- API documentation
- Example fleets
- Video tutorials

## API Endpoints to Connect

### Already Working (in current site)
- GET /api/stats - GitHub statistics
- GET /api/features - Feature list with voting
- GET /api/agents - Agent status info
- GET /api/activity - Recent activity
- POST /api/vote/:id - Vote on features

### Need to Build
- GET /api/fleets - List user's fleets
- POST /api/fleets - Create new fleet
- GET /api/fleets/:id - Get fleet details
- POST /api/fleets/:id/deploy - Deploy fleet
- GET /api/fleets/:id/logs - Get fleet logs

## Core Features Needed

### Fleet Builder
- Form to input fleet details
- List of available agent templates
- Configuration fields for each agent
- Validation before deploy
- Success/error messages

### Fleet Dashboard  
- Real-time status updates (use existing WebSocket code)
- Agent cards showing online/offline
- Simple log viewer
- Start/Stop controls
- Basic metrics (tasks completed, uptime)

### Authentication
- Login with GitHub
- Session management
- Protect fleet routes
- Public demo route

## What We DON'T Need (Yet)
- Complex visual node editors
- Drag and drop interfaces
- Advanced analytics
- Multi-fleet management
- Agent marketplace

## File Structure
```
/pages
  /index.tsx          - Home page
  /demo.tsx          - Public demo
  /login.tsx         - Auth page
  /dashboard.tsx     - User dashboard
  /fleet
    /new.tsx         - Create fleet
    /[id].tsx        - View fleet
  /docs.tsx          - Documentation

/components
  /FleetBuilder.tsx  - Fleet creation form
  /FleetStatus.tsx   - Fleet monitoring
  /AgentCard.tsx     - Agent status card
  /LogViewer.tsx     - Simple log display
```

## Next Steps
1. Set up routing (React Router)
2. Create basic pages
3. Connect to existing APIs
4. Add authentication
5. Build fleet creation form
6. Implement real-time updates

Keep it simple. Get basic functionality working first. Builder.io will handle making it beautiful.