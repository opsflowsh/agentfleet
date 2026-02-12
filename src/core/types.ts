// Core TypeScript types for AgentFleet

export interface Agent {
  id: string;
  name: string;
  role: string;
  description?: string;
  avatar?: string;
  capabilities: string[];
  status: 'active' | 'idle' | 'thinking' | 'offline';
  config: AgentConfig;
  metrics: AgentMetrics;
}

export interface AgentConfig {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  tools: string[];
  personality?: string;
  instructions?: string;
}

export interface AgentMetrics {
  tasksCompleted: number;
  successRate: number;
  averageResponseTime: number;
  totalTokensUsed: number;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  type: 'research' | 'create' | 'analyze' | 'build';
  status: 'pending' | 'assigned' | 'in-progress' | 'review' | 'complete';
  assignedTo?: string[];
  progress: number;
  createdAt: Date;
  updatedAt: Date;
  artifacts?: Artifact[];
}

export interface Artifact {
  id: string;
  missionId: string;
  agentId: string;
  type: 'document' | 'code' | 'image' | 'data';
  content: string;
  metadata?: Record<string, any>;
}

export interface Fleet {
  id: string;
  name: string;
  description?: string;
  agents: Agent[];
  missions: Mission[];
  config: FleetConfig;
}

export interface FleetConfig {
  coordinationMode: 'autonomous' | 'supervised' | 'manual';
  communicationProtocol: 'direct' | 'broadcast' | 'hub';
  maxConcurrentMissions: number;
}