/**
 * Agent Card Component - Display individual agent status
 * @author nexusfe-bot
 */

import React from 'react';
import type { Agent } from '../../core/fleet-manager';

interface AgentCardProps {
  agent: Agent;
  onAssignTask: (agentId: string) => void;
  onConfigure: (agentId: string) => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({ 
  agent, 
  onAssignTask, 
  onConfigure 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'idle': return 'bg-gray-100 text-gray-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAgentEmoji = (type: string) => {
    const emojiMap: { [key: string]: string } = {
      'DevOps Engineer': '🔧',
      'Security Specialist': '🔒',
      'Full-Stack Developer': '💻',
      'UI/UX Designer': '🎨',
      'Data Engineer': '📊',
      'ML Engineer': '🤖'
    };
    return emojiMap[type] || '🦞';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">{getAgentEmoji(agent.type)}</span>
          <div>
            <h3 className="font-semibold text-lg">{agent.name}</h3>
            <p className="text-sm text-gray-600">{agent.type}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
          {agent.status}
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Skills</p>
          <div className="flex flex-wrap gap-1">
            {agent.skills.map((skill) => (
              <span 
                key={skill} 
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Model</p>
          <p className="text-sm font-mono">{agent.model}</p>
        </div>

        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">
            Max concurrent tasks: {agent.maxConcurrentTasks}
          </p>
          
          <div className="flex gap-2">
            <button
              onClick={() => onAssignTask(agent.id)}
              disabled={agent.status === 'active'}
              className={`flex-1 py-2 px-4 rounded text-sm font-medium transition-colors ${
                agent.status === 'active' 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Assign Task
            </button>
            <button
              onClick={() => onConfigure(agent.id)}
              className="flex-1 py-2 px-4 rounded text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Configure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;