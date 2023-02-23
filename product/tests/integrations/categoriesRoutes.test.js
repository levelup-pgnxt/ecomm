import request from 'supertest';
import {
    describe, expect, it, jest
} from '@jest/globals';
import app from '../../src/app.js';

let server;
beforeEach(() => {
    const PORT = 3003;
    server = app.listen(PORT, () => {
        console.log(`rodando na porta: ${PORT}`)
    });
});

afterEach(() => {
    server.close();
});

describe('CATEGORIES ROUTES', () => {
    describe('GET /categories', () => {
        it('should return a list of categories', async () => {
            const response = await request(app)
                .get('/categories')
                .expect('content-type', /json/)
                .expect(200);

            expect(response.body).toBeInstanceOf(Array);
        });
    });
});
