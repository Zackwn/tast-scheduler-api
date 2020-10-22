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

  async deleteById(id: number) {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== id
    })
  }

  async save(task: Task) {
    this.tasks.push(task)
  }

  async getFirstUnscheduled(): Promise<Task | null> {
    if (this.tasks.length === 0) {
      return null
    }
    let firstUnscheduled = null
    this.tasks.every((task, index) => {
      if (!task.isScheduled) {
        firstUnscheduled = task
        this.tasks[index].isScheduled = true
        return false
      }
      return true
    })
    return firstUnscheduled
  }
}