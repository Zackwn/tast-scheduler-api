import { Task } from "../entities/Task";

export interface ITaskRepository {
  tasks: Array<Task>

  findByName(name: string): Promise<Task>
  save(task: Task): Promise<void>
  getFirstAndPop(): Promise<Task | null>
}

