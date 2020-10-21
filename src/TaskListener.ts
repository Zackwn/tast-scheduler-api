import { Task } from "./entities/Task";
import { ITaskRepository } from "./repositories/ITaskRepository";

import { taskRepository } from './useCase/createTask'

async function TaskListener(taskRepository: ITaskRepository): Promise<void> {
  setInterval(async () => {
    const task = await taskRepository.getFirstAndPop()
    if (task) {
      handleTask(task)
    }
  }, (5000 * 5))
}

const handleTask = (task: Task) => {
  console.log(task.name)
}

(() => {
  TaskListener(taskRepository)
})()