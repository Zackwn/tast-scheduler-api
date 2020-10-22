import TaskRepository from '../../repositories/TaskRepository'
import { CreateTaskUseCase } from './CreateTaskUseCase'

const createTaskUseCase = new CreateTaskUseCase(TaskRepository)

export default createTaskUseCase