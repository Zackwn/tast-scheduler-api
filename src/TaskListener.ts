import { Task } from "./entities/Task";
import { ITaskRepository } from "./repositories/ITaskRepository";

import { taskRepository } from './useCase/createTask'

async function TaskListener(taskRepository: ITaskRepository): Promise<NodeJS.Timeout> {
  let intervalID = setInterval(async () => {
    const task = await taskRepository.getFirstUnscheduled()
    if (task) {
      console.log('Task: '+task.name+' scheduled')
      setTimeout(() => {
        handleTask(task)
        taskRepository.deleteById(task.id)
      }, task.time)
    }
  }, 0)
  return intervalID
}

const handleTask = (task: Task) => {
  console.log(task.name)
}

export const startTaskListener = () => {
  const intervalID = TaskListener(taskRepository)
  return intervalID
}