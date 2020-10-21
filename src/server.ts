import http from 'http'

import './TaskListener'

import createUserUseCase from './useCase/createTask'

const server = http.createServer((request, response) => {
  if (request.url === '/new-task' && request.method === 'POST') {
    request.on('data', async (data) => {
      const { name, description } = JSON.parse(data)
      try {
        await createUserUseCase.execute({ name, description })
        response.statusCode = 201
        response.write('Created!')
      } catch (err) {
        response.statusCode = 404
        response.write('Task alredy created')
      } finally {
        response.end()
      }
    })
  } else {
    response.statusCode = 404
    response.write('Not found')
    response.end()
  }
})

server.listen(3333, () => console.log('Server Listening'))