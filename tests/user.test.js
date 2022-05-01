const request = require('supertest')
const app = require('../src/app')
jest.setTimeout(30000)

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Max',
        email: 'Test@example.com',
        password: 'MyPass777!'
    }).expect(201)
})