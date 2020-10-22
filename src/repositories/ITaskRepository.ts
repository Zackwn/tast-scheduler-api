import { Task } from "../entities/Task";

export interface ITaskRepository {
  tasks: Array<Task>

  findByName(name: string): Promise<Task>
  deleteById(id: number): Promise<void>
  save(task: Task): Promise<void>
  getFirstUnscheduled(): Promise<Task | null>
}

