import { Task } from "./entities/Task";
import { ITaskRepository } from "./repositories/TaskRepository/ITaskRepository";

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

export const startTaskListener = (taskRepository: ITaskRepository) => {
  const intervalID = TaskListener(taskRepository)
  return intervalID
}