import app from '../../app.js';
import request from 'supertest';

describe('GET em /api/produtos', () => {
    it('Deve retornar uma lista de produtos', async () => {
        await request(app)
            .get('/api/produtos')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
    })
});

