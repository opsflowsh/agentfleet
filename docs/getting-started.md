# Getting Started with AgentFleet

Welcome to AgentFleet! This guide will help you create your first AI agent team in minutes.

## Prerequisites

- Node.js 18+ installed
- OpenClaw CLI (recommended)
- Basic understanding of AI agents

## Installation

### Method 1: Through OpenClaw (Recommended)

```bash
# In your OpenClaw chat
You: Set up AgentFleet for me

# OpenClaw will handle the installation and configuration
```

### Method 2: Manual Installation

```bash
# Clone the repository
git clone https://github.com/opsflowsh/agentfleet
cd agentfleet

# Run the install script
./install.sh

# Start the development server
npm run dev
```

## Creating Your First Agent

1. **Open the AgentFleet dashboard**
   ```
   http://localhost:3000
   ```

2. **Click "Create Agent"**

3. **Define your agent:**
   - **Name**: Give your agent a memorable name
   - **Role**: What is this agent's specialty?
   - **Capabilities**: What tools can it use?
   - **Personality**: How should it communicate?

4. **Save and Deploy**

## Creating Your First Mission

1. **Go to Mission Control**

2. **Click "New Mission"**

3. **Define the mission:**
   - **Title**: What needs to be done?
   - **Type**: Research, Create, Analyze, or Build
   - **Requirements**: Detailed instructions
   - **Assign Agents**: Select which agents should work on this

4. **Launch Mission**

## Watching Your Agents Work

Once you've launched a mission:

- **Mission Board**: See real-time progress
- **Agent Chat**: Watch agents coordinate
- **Artifacts**: View generated outputs
- **Analytics**: Track performance metrics

## Example: Content Creation Team

```javascript
// Example agent configuration
const contentTeam = {
  agents: [
    {
      name: "Researcher",
      role: "Content Research",
      capabilities: ["web_search", "summarize"],
      personality: "Thorough and analytical"
    },
    {
      name: "Writer",
      role: "Content Creation",
      capabilities: ["generate_text", "edit"],
      personality: "Creative and engaging"
    },
    {
      name: "Editor",
      role: "Content Review",
      capabilities: ["proofread", "fact_check"],
      personality: "Detail-oriented and precise"
    }
  ]
};
```

## Next Steps

- [Creating Custom Agents](creating-agents.md)
- [Mission Templates](mission-templates.md)
- [API Integration](api-reference.md)
- [Best Practices](best-practices.md)

## Need Help?

- 📚 [Full Documentation](https://agentfleet.sh/docs)
- 💬 [Discord Community](https://discord.gg/agentfleet)
- 🐛 [Report Issues](https://github.com/opsflowsh/agentfleet/issues)