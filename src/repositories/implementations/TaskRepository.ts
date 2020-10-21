import { Task } from "../../entities/Task";
import { ITaskRepository } from "../ITaskRepository";

export class TaskRepository implements ITaskRepository {
  public tasks: Task[] = []

  async findByName(name: string) {
    let task = this.tasks.find((task) => {
      return task.name === name
    })
    return task
  }

  async save(task: Task) {
    this.tasks.push(task)
  }

  async getFirstAndPop(): Promise<Task | null> {
    if (this.tasks.length === 0) {
      return null
    }
    const firstTask = this.tasks.shift()
    return firstTask
  }
}