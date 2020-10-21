import { TaskRepository } from '../../repositories/implementations/TaskRepository'
import { CreateTaskUseCase } from './CreateTaskUseCase'

export const taskRepository = new TaskRepository()
const createTaskUseCase = new CreateTaskUseCase(taskRepository)

export default createTaskUseCase