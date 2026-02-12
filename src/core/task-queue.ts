/**
 * Task Queue System for AgentFleet
 * @author koda-cmd
 */

export interface Task {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'queued' | 'assigned' | 'in-progress' | 'completed' | 'failed';
  assignedTo?: string;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  result?: any;
}

export class TaskQueue {
  private queue: Map<string, Task> = new Map();
  private priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };

  /**
   * Add a new task to the queue
   */
  addTask(task: Omit<Task, 'id' | 'createdAt' | 'status'>): Task {
    const newTask: Task = {
      ...task,
      id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      status: 'queued',
      createdAt: new Date()
    };

    this.queue.set(newTask.id, newTask);
    console.log(`📋 Task "${newTask.title}" added to queue`);
    
    return newTask;
  }

  /**
   * Get next available task based on priority and skills
   */
  getNextTask(agentSkills: string[]): Task | null {
    const availableTasks = Array.from(this.queue.values())
      .filter(task => 
        task.status === 'queued' &&
        task.requiredSkills.some(skill => agentSkills.includes(skill))
      )
      .sort((a, b) => 
        this.priorityOrder[b.priority] - this.priorityOrder[a.priority]
      );

    return availableTasks[0] || null;
  }

  /**
   * Mark task as assigned to an agent
   */
  assignTask(taskId: string, agentId: string): boolean {
    const task = this.queue.get(taskId);
    if (!task || task.status !== 'queued') return false;

    task.status = 'assigned';
    task.assignedTo = agentId;
    task.startedAt = new Date();
    
    return true;
  }

  /**
   * Update task progress
   */
  updateTaskStatus(taskId: string, status: Task['status'], result?: any): boolean {
    const task = this.queue.get(taskId);
    if (!task) return false;

    task.status = status;
    if (status === 'completed' || status === 'failed') {
      task.completedAt = new Date();
      task.result = result;
    }

    return true;
  }

  /**
   * Get queue statistics
   */
  getQueueStats() {
    const tasks = Array.from(this.queue.values());
    
    return {
      total: tasks.length,
      queued: tasks.filter(t => t.status === 'queued').length,
      assigned: tasks.filter(t => t.status === 'assigned').length,
      inProgress: tasks.filter(t => t.status === 'in-progress').length,
      completed: tasks.filter(t => t.status === 'completed').length,
      failed: tasks.filter(t => t.status === 'failed').length,
      avgCompletionTime: this.calculateAvgCompletionTime(tasks)
    };
  }

  private calculateAvgCompletionTime(tasks: Task[]): number {
    const completedTasks = tasks.filter(t => 
      t.status === 'completed' && t.startedAt && t.completedAt
    );

    if (completedTasks.length === 0) return 0;

    const totalTime = completedTasks.reduce((sum, task) => {
      const duration = task.completedAt!.getTime() - task.startedAt!.getTime();
      return sum + duration;
    }, 0);

    return totalTime / completedTasks.length / 1000 / 60; // Return in minutes
  }
}