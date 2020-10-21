import { Task } from "../../entities/Task";
import { ITaskRepository } from "../../repositories/ITaskRepository";
import { CreateTaskDTO } from './CreateTaskDTO'

export class CreateTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository
  ) {}

  async execute(data: CreateTaskDTO) {
    const taskAlredyExists = await this.taskRepository.findByName(data.name)

    if (taskAlredyExists) {
      throw new Error ('User alredy exists.')
    }

    const task = new Task(data)

    this.taskRepository.save(task)
  }
} 