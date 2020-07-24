const request = require('supertest');
const server = require('../server.js');

describe('characters router', function () {
    it('should run the tests', function () {
        expect(true).toBe(true);
    })
})

describe('GET /api/characters', function () {
    it('should respond with status 200', function () {
        return request(server).get('/api/characters')
            .then(res => {
                expect(res.status).toBe(200);
            })
    })

    it('should return an array of characters', function () {
        return request(server).get('/api/characters')
            .then(res => {
                expect(Array.isArray(res.body)).toBe(true);
            })
    })
})