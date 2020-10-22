import { startTaskListener } from '../../src/TaskListener'
import TaskRepository from '../../src/repositories/TaskRepository'
import { Task } from '../../src/entities/Task'

let intervalID = null
describe('Task listener and repository logic', () => {
  beforeAll(async () => {
    intervalID = await startTaskListener(TaskRepository)
  })

  it('should create a task', (done) => {
    TaskRepository.save(new Task({
      description: 'test 1',
      name: 'test 1',
      time: 100
    }))
    setTimeout(() => {
      let task = TaskRepository.getFirstUnscheduled()
      expect(Object.values(task).length === 0).toBeTruthy()
      done()
    }, 200)
  })

  afterAll((done) => {
    if (intervalID) {
      clearInterval(intervalID)
    }
    done()
  })
})