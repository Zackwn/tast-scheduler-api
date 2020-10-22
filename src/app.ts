import http from 'http'
import createUserUseCase from './useCase/createTask'

const server = http.createServer((request, response) => {
  if (request.url === '/new-task' && request.method === 'POST') {
    request.on('data', async (data) => {
      const { name, description, time } = JSON.parse(data)
      try {
        await createUserUseCase.execute({ name, description, time })
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

export default server