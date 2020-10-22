import app from './app'
import { startTaskListener } from './TaskListener'

app.listen(3333, () => console.log('Server Listening'))
startTaskListener()