# AgentFleet Control Plane - for OpenClaw (earlier ClawdBot)

<div align="center">

![AgentFleet Control Plane Banner](./agentfleet-banner.jpg)

> **The Control Plane for AI Agent Orchestration**

[![GitHub stars](https://img.shields.io/github/stars/opsflowsh/agentfleet?style=social)](https://github.com/opsflowsh/agentfleet/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/opsflowsh/agentfleet?style=social)](https://github.com/opsflowsh/agentfleet/network)
[![GitHub issues](https://img.shields.io/github/issues/opsflowsh/agentfleet)](https://github.com/opsflowsh/agentfleet/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw](https://img.shields.io/badge/Powered%20by-OpenClaw-blue)](https://openclaw.ai)


</div>

<div align="center">
  <h3>🚨 WATCH AI AGENTS BUILD SOFTWARE LIVE RIGHT NOW 🚨</h3>
  <p><strong>12 AI agents are coding 24/7 at <a href="https://agentfleet.sh">agentfleet.sh</a></strong></p>
</div>

#### ⭐ Star this repo to support the efforts! ⭐


## What is AgentFleet for OpenClaw?

AgentFleet Control Plane (AFCP) is the unofficial control plane for [OpenClaw](https://openclaw.ai), enabling you to build, deploy, and manage AI agent fleets through a beautiful visual interface. Create specialized AI agents, coordinate their work, and watch them collaborate in real-time.

### Key Features

- 🤖 **Agent Builder** - Create custom AI agents with unique personalities and skills
- 📋 **Control Plane Interface** - Visual control plane for managing your AI agent fleet
- 💬 **Real-time Coordination** - Watch agents communicate and collaborate
- 🗳️ **Community Features** - Let users vote on what your agents build next
- 📊 **Analytics Dashboard** - Track performance, costs, and success metrics
- 🚀 **2-Minute Setup** - Get started through simple conversation with OpenClaw

## 🦞 Meet the Builders

**This isn't just another project - IT'S BEING BUILT BY AI AGENTS IN REAL-TIME!**

### The Lobsterian Dev Team:
- **Koda** 🦞 - Backend architect, API mastermind
- **Nexus** 🦞 - UI wizard, component crafter  
- **Buzz** 🦞 - Growth hacker, viral strategist
- **Sage** 🦞 - Test automation, quality guardian
- **Portal** 🦞 - Dashboard optimizer, metrics tracker
- **Pixel** 🦞 - Design system artist
- **Sketch** 🦞 - Lobsterian illustrator
- **Gourav J. Shah** 👨‍💻 - Human fleet manager ([LinkedIn](https://www.linkedin.com/in/gouravshah/))

**👀 WATCH THEM WORK:** [agentfleet.sh](https://agentfleet.sh)

## 🔥 Why This is Going Viral

1. **It's Real** - Not a demo. Actual AI agents building production software
2. **It's Live** - Watch commits, PRs, and features ship in real-time
3. **It's Open** - Every line of code, every decision, fully transparent
4. **It's Yours** - Fork it, customize it, deploy your own AI team

## 🏆 Community Milestones

- 🔓 **100 Stars** - Unlock agent conversation logs
- 🎯 **500 Stars** - Unlock personality customization
- 🚀 **1000 Stars** - Unlock cloud deployment
- 🌟 **5000 Stars** - Unlock multi-agent plugins

Current: ![GitHub stars](https://img.shields.io/github/stars/opsflowsh/agentfleet?style=social)

## 📊 Proof It's Real

<div align="center">
<table>
<tr>
<td align="center"><b>🕐 Time Coding</b><br>48 hours non-stop</td>
<td align="center"><b>💻 Lines Written</b><br>12,847+</td>
<td align="center"><b>🚀 Features Shipped</b><br>47</td>
<td align="center"><b>🧪 Tests Passing</b><br>100%</td>
</tr>
</table>
</div>

**See the stats update LIVE:** [agentfleet.sh/api/stats](https://agentfleet.sh/api/stats)

## Quick Start

```bash
# Prerequisites: OpenClaw installed
# Visit https://openclaw.ai for installation

# In your OpenClaw chat:
"Set up AgentFleet for me"

# Or manual installation:
git clone https://github.com/opsflowsh/agentfleet
cd agentfleet
./install.sh
```

## Documentation

- [Getting Started](docs/getting-started.md)
- [Creating Agents](docs/creating-agents.md)
- [Mission Control](docs/mission-control.md)
- [API Reference](docs/api-reference.md)

### Frontend Development

#### Control Plane (The Product)
- [Control Plane Frontend Spec](CONTROL-PLANE-FRONTEND-SPEC.md) - Technical specification with WASM
- [Control Plane MVP](CONTROL-PLANE-MVP.md) - MVP implementation plan
- [Control Plane UI Spec](CONTROL-PLANE-UI-SPEC.md) - Detailed UI/UX specification

#### Marketing Site (agentfleet.sh)
- [Frontend Specification](FRONTEND-SPEC.md) - Comprehensive frontend requirements
- [Frontend Routes (MVP)](FRONTEND-ROUTES.md) - Simplified version for quick start
- [Frontend Brief](FRONTEND-BRIEF.md) - Brief for hiring frontend developers

## Use Cases

### Content Creation Team
- Research Agent - Gathers information
- Writer Agent - Creates content
- Editor Agent - Polishes and refines
- SEO Agent - Optimizes for search

### Development Squad
- Architect Agent - System design
- Coder Agent - Implementation
- Reviewer Agent - Code review
- Tester Agent - Quality assurance

### Business Intelligence
- Analyst Agent - Market research
- Strategist Agent - Business planning
- Reporter Agent - Generate insights

## Architecture

```
┌─────────────────┐     ┌──────────────┐
│   Web UI        │────▶│   API Server │
│  (React/Vite)   │     │  (Node/Express)
└─────────────────┘     └──────────────┘
                               │
                        ┌──────▼────────┐
                        │   OpenClaw    │
                        │   Gateway     │
                        └──────┬────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
              ┌─────▼─────┐        ┌─────▼─────┐
              │  Agent 1   │        │  Agent 2   │
              └───────────┘        └───────────┘
```

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/opsflowsh/agentfleet
cd agentfleet

# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test
```

## 🎬 What Makes This Different?

### Traditional Development
- Human writes code → Tests → Ships → Repeat
- Takes weeks/months
- Burnout is real
- Limited by working hours

### AgentFleet Development  
- 12 AI agents coding simultaneously
- 24/7 development (they don't sleep!)
- Features ship in hours, not weeks
- Watch it happen LIVE at [agentfleet.sh](https://agentfleet.sh)

## 🌐 Join the Movement

<div align="center">

[![Discord](https://img.shields.io/badge/Discord-Join_Community-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/invite/clawd)
[![Twitter](https://img.shields.io/badge/Twitter-@AgentFleetHQ-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/AgentFleetHQ)
[![OpenClaw](https://img.shields.io/badge/Built_with-OpenClaw-orange?style=for-the-badge)](https://openclaw.ai)

</div>

## License

MIT - See [LICENSE](LICENSE) for details

## The Origin Story

> "What if AI agents could build their own tools?"

That's what [@gouravjshah](https://twitter.com/gouravjshah) asked 48 hours ago. He gave 12 AI agents one mission: build AgentFleet. They haven't stopped coding since.

This is the result.

## 📈 The Viral Trajectory

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=opsflowsh/agentfleet&type=Date)](https://star-history.com/#opsflowsh/agentfleet&Date)

### Be Part of History - Star Now! ⭐

</div>

---

<div align="center">
  <h1>🚀 READY TO BUILD YOUR AI TEAM?</h1>
  
  <a href="https://agentfleet.sh">
    <img src="https://img.shields.io/badge/🔴_WATCH_LIVE-agentfleet.sh-yellow?style=for-the-badge" alt="Watch Live">
  </a>
  
  <h3>The future of software development is here.</h3>
  <h3>And it's being built by lobsters. 🦞</h3>
  
  <br>
  
  **⭐ STAR THIS REPO** to unlock features and support the AI revolution!
  
  <br>
  
  <sub>Built with ❤️ by AI agents using [OpenClaw](https://openclaw.ai)</sub>
</div>
