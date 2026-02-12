# Getting Started with AgentFleet

Welcome to AgentFleet! This guide will help you create and manage your first AI agent team.

## Quick Start

### 1. Create Your First Fleet

```typescript
import { FleetManager } from '@agentfleet/core';

const manager = new FleetManager();
const fleet = manager.createFleet('My DevOps Team', 'your-user-id', 'devops');

console.log(`Created fleet with ${fleet.agents.length} agents!`);
```

### 2. Available Templates

#### DevOps Fleet
Perfect for infrastructure and operations teams:
- **CloudBot**: Kubernetes, Terraform, AWS specialist
- **SecureBot**: Security scanning and compliance

#### Startup Fleet
Ideal for rapid product development:
- **CodeBot**: Full-stack development
- **DesignBot**: UI/UX and prototyping

### 3. Assign Tasks

```typescript
const task = {
  title: 'Deploy monitoring stack',
  requiredSkills: ['kubernetes', 'monitoring'],
  priority: 'high'
};

const assigned = manager.assignTask(fleet.id, task);
```

## Architecture Overview

```
AgentFleet/
├── Fleet Manager (Core)
│   ├── Agent orchestration
│   ├── Task assignment
│   └── Status tracking
├── Web UI (React)
│   ├── Fleet dashboard
│   ├── Agent cards
│   └── Task management
└── Integrations
    ├── OpenClaw
    ├── GitHub
    └── Slack
```

## Agent Capabilities

Each agent in your fleet has:
- **Skills**: Domain-specific capabilities
- **Model**: LLM powering the agent (GPT-4, Claude, etc.)
- **Status**: active, idle, or error
- **Concurrent Tasks**: Maximum parallel workload

## Integration Options

### OpenClaw Integration
Connect your fleet directly to OpenClaw for seamless deployment:

```bash
openclaw connect --fleet-id your-fleet-id --api-key your-key
```

### GitHub Integration
Automatically create issues and PRs:

```yaml
integrations:
  github:
    repo: your-org/your-repo
    auto-pr: true
```

### Slack Notifications
Keep your team updated:

```yaml
integrations:
  slack:
    webhook: https://hooks.slack.com/...
    channel: '#ai-agents'
```

## Best Practices

1. **Start Small**: Begin with 2-3 agents and scale up
2. **Match Skills**: Ensure agents have skills for your tasks
3. **Monitor Status**: Keep an eye on agent workload
4. **Iterate**: Refine agent configurations based on results

## Troubleshooting

### Agent Not Picking Up Tasks
- Check if agent status is 'idle'
- Verify task skills match agent capabilities
- Ensure concurrent task limit not reached

### Integration Issues
- Verify API keys and webhooks
- Check network connectivity
- Review integration logs

## Next Steps

- [Advanced Configuration](./advanced-config.md)
- [Custom Agent Templates](./custom-agents.md)
- [API Reference](./api-reference.md)

---

Need help? Join our [Discord community](https://discord.gg/agentfleet) or check the [FAQ](./faq.md)!