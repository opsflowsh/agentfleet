/**
 * Fleet Manager Tests
 * @author sage-create
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { FleetManager } from '../src/core/fleet-manager';

describe('FleetManager', () => {
  let fleetManager: FleetManager;

  beforeEach(() => {
    fleetManager = new FleetManager();
  });

  describe('createFleet', () => {
    it('should create a fleet with DevOps template', () => {
      const fleet = fleetManager.createFleet('My DevOps Team', 'user123', 'devops');
      
      expect(fleet).toBeDefined();
      expect(fleet.name).toBe('My DevOps Team');
      expect(fleet.agents).toHaveLength(2);
      expect(fleet.agents[0].name).toBe('CloudBot');
      expect(fleet.agents[1].name).toBe('SecureBot');
    });

    it('should create a fleet with Startup template', () => {
      const fleet = fleetManager.createFleet('Startup Squad', 'user456', 'startup');
      
      expect(fleet).toBeDefined();
      expect(fleet.agents).toHaveLength(2);
      expect(fleet.agents[0].type).toBe('Full-Stack Developer');
      expect(fleet.agents[1].type).toBe('UI/UX Designer');
    });

    it('should create empty fleet without template', () => {
      const fleet = fleetManager.createFleet('Custom Fleet', 'user789');
      
      expect(fleet).toBeDefined();
      expect(fleet.agents).toHaveLength(0);
    });
  });

  describe('assignTask', () => {
    it('should assign task to available agent with matching skills', () => {
      const fleet = fleetManager.createFleet('Test Fleet', 'user123', 'devops');
      const task = {
        requiredSkills: ['kubernetes', 'monitoring']
      };
      
      const assigned = fleetManager.assignTask(fleet.id, task);
      
      expect(assigned).toBe(true);
      expect(fleet.agents[0].status).toBe('active');
    });

    it('should not assign task if no agents have required skills', () => {
      const fleet = fleetManager.createFleet('Test Fleet', 'user123', 'devops');
      const task = {
        requiredSkills: ['machine-learning', 'data-science']
      };
      
      const assigned = fleetManager.assignTask(fleet.id, task);
      
      expect(assigned).toBe(false);
      expect(fleet.agents.every(a => a.status === 'idle')).toBe(true);
    });

    it('should return false for non-existent fleet', () => {
      const assigned = fleetManager.assignTask('invalid-fleet-id', {
        requiredSkills: ['any']
      });
      
      expect(assigned).toBe(false);
    });
  });
});

// Test data generators for integration tests
export const mockFleetData = {
  devOpsFleet: {
    name: 'Production DevOps Team',
    template: 'devops',
    expectedAgents: ['CloudBot', 'SecureBot']
  },
  startupFleet: {
    name: 'MVP Builder Team',
    template: 'startup',
    expectedAgents: ['CodeBot', 'DesignBot']
  }
};