/**
 * Fleet Manager - Core orchestration engine for AgentFleet
 * @author koda-cmd
 */

export interface Agent {
  id: string;
  name: string;
  type: string;
  model: string;
  skills: string[];
  status: 'active' | 'idle' | 'error';
  maxConcurrentTasks: number;
}

export interface Fleet {
  id: string;
  name: string;
  ownerId: string;
  agents: Agent[];
  created: Date;
  lastActive: Date;
}

export class FleetManager {
  private fleets: Map<string, Fleet> = new Map();

  /**
   * Create a new fleet with predefined agents
   */
  createFleet(name: string, ownerId: string, template?: string): Fleet {
    const fleet: Fleet = {
      id: `fleet-${Date.now()}`,
      name,
      ownerId,
      agents: this.getTemplateAgents(template),
      created: new Date(),
      lastActive: new Date()
    };

    this.fleets.set(fleet.id, fleet);
    console.log(`🦞 Fleet "${name}" created with ${fleet.agents.length} agents`);
    
    return fleet;
  }

  /**
   * Get predefined agent templates
   */
  private getTemplateAgents(template?: string): Agent[] {
    switch (template) {
      case 'devops':
        return [
          {
            id: 'agent-devops-1',
            name: 'CloudBot',
            type: 'DevOps Engineer',
            model: 'gpt-4',
            skills: ['kubernetes', 'terraform', 'aws', 'monitoring'],
            status: 'idle',
            maxConcurrentTasks: 3
          },
          {
            id: 'agent-devops-2',
            name: 'SecureBot',
            type: 'Security Specialist',
            model: 'claude-sonnet',
            skills: ['security-scanning', 'compliance', 'penetration-testing'],
            status: 'idle',
            maxConcurrentTasks: 2
          }
        ];
      
      case 'startup':
        return [
          {
            id: 'agent-startup-1',
            name: 'CodeBot',
            type: 'Full-Stack Developer',
            model: 'gpt-4',
            skills: ['react', 'nodejs', 'database', 'api-design'],
            status: 'idle',
            maxConcurrentTasks: 5
          },
          {
            id: 'agent-startup-2',
            name: 'DesignBot',
            type: 'UI/UX Designer',
            model: 'gpt-4',
            skills: ['ui-design', 'user-research', 'prototyping'],
            status: 'idle',
            maxConcurrentTasks: 2
          }
        ];
        
      default:
        return [];
    }
  }

  /**
   * Assign a task to an available agent
   */
  assignTask(fleetId: string, task: any): boolean {
    const fleet = this.fleets.get(fleetId);
    if (!fleet) return false;

    // Find an idle agent with matching skills
    const availableAgent = fleet.agents.find(
      agent => agent.status === 'idle' && 
      task.requiredSkills.some((skill: string) => agent.skills.includes(skill))
    );

    if (availableAgent) {
      availableAgent.status = 'active';
      console.log(`📋 Task assigned to ${availableAgent.name}`);
      return true;
    }

    return false;
  }
}

export default FleetManager;