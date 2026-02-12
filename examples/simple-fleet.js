/**
 * Simple AgentFleet Example
 * This example shows how to create a basic content creation fleet
 */

import { AgentFleet } from '../src/core/index.js';

async function createContentFleet() {
  // Initialize AgentFleet
  const fleet = new AgentFleet({
    name: 'Content Creation Team',
    description: 'AI agents for creating blog content'
  });

  // Create agents
  const researcher = await fleet.createAgent({
    name: 'Researcher',
    role: 'Content Research Specialist',
    capabilities: ['web_search', 'summarize', 'extract_facts'],
    personality: 'Thorough and analytical, always backs claims with sources'
  });

  const writer = await fleet.createAgent({
    name: 'Writer',
    role: 'Creative Content Writer',
    capabilities: ['generate_text', 'creative_writing', 'style_adaptation'],
    personality: 'Engaging and creative, adapts tone to audience'
  });

  const editor = await fleet.createAgent({
    name: 'Editor',
    role: 'Content Editor & Proofreader',
    capabilities: ['proofread', 'fact_check', 'improve_clarity'],
    personality: 'Detail-oriented, ensures accuracy and readability'
  });

  // Create a mission
  const mission = await fleet.createMission({
    title: 'Write Blog Post about AI Agents',
    type: 'create',
    requirements: `
      Create a comprehensive blog post about AI agents:
      - Research current AI agent trends
      - Write 1500-2000 words
      - Include real-world examples
      - Make it engaging and accessible
      - Optimize for SEO
    `,
    assignedTo: [researcher.id, writer.id, editor.id]
  });

  // Start the mission
  await fleet.startMission(mission.id);

  // Monitor progress
  fleet.on('progress', (update) => {
    console.log(`Progress: ${update.progress}% - ${update.message}`);
  });

  fleet.on('artifact', (artifact) => {
    console.log(`New artifact from ${artifact.agentId}: ${artifact.type}`);
  });

  fleet.on('complete', (result) => {
    console.log('Mission complete!');
    console.log('Final output:', result.artifacts);
  });
}

// Run the example
createContentFleet().catch(console.error);