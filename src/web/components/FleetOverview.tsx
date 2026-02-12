/**
 * Fleet Overview Component - Dashboard view of entire fleet
 * @author nexusfe-bot
 */

import React from 'react';
import AgentCard from './AgentCard';
import type { Fleet } from '../../core/fleet-manager';

interface FleetOverviewProps {
  fleet: Fleet;
  onAgentAction: (action: string, agentId: string) => void;
}

export const FleetOverview: React.FC<FleetOverviewProps> = ({ fleet, onAgentAction }) => {
  const stats = {
    total: fleet.agents.length,
    active: fleet.agents.filter(a => a.status === 'active').length,
    idle: fleet.agents.filter(a => a.status === 'idle').length,
    error: fleet.agents.filter(a => a.status === 'error').length
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{fleet.name}</h1>
        <p className="text-gray-600 mt-2">
          Manage your AI agent team • Created {new Date(fleet.created).toLocaleDateString()}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
          <div className="text-sm text-gray-600">Total Agents</div>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-green-600">{stats.active}</div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-gray-600">{stats.idle}</div>
          <div className="text-sm text-gray-600">Idle</div>
        </div>
        <div className="bg-red-50 p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-red-600">{stats.error}</div>
          <div className="text-sm text-gray-600">Errors</div>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleet.agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            onAssignTask={(id) => onAgentAction('assign', id)}
            onConfigure={(id) => onAgentAction('configure', id)}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          🚀 Quick Actions
        </h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Add New Agent
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            Import Template
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            Fleet Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default FleetOverview;