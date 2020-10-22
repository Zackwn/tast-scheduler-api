import app from './app'
import { startTaskListener } from './TaskListener'
import TaskRepository from './repositories/TaskRepository'

app.listen(3333, () => console.log('Server Listening'))
startTaskListener(TaskRepository)