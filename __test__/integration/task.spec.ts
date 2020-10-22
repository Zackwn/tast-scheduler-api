import supertest from 'supertest'
import request from 'supertest'
import app from '../../src/app'

describe('Task scheduling api', () => {
  it('should create a task', async (done) => {
    const res = await request(app).post('/new-task').send({ 
      name: "test name",
      description: "test description",
      time: 5000
    })

    expect(res.status).toBe(201)
    done()
  })

  it ('should fail creating two tasks with same name closely', async (done) => {
    const responses: request.Response[] = []
    for (let i = 0; i < 2; i++) {
      const response = await supertest(app).post('/new-task').send({ 
        name: "test name 2",
        description: "test description 2",
        time: 5000
      })
      responses.push(response)
    }

    expect(responses.length).toBe(2)
    expect(responses[0].status).toBe(201)
    expect(responses[1].status).toBe(404)
    done()
  })

  afterAll((done) => {
    done()
  })
})