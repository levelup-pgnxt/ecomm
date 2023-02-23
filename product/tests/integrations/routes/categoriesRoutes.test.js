import request from 'supertest';
import {
    describe, expect, it, jest
} from '@jest/globals';
import app from '../../../src/app.js';

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

let ID;
const NAME_NEW_CATEGORY = { nome: 'BRINQUEDOS' };
const UPDATE_NAME_CATEGORY = { nome: 'JOGOS BRINQUEDOS' };
const ID_INEXISTENTE = '66f76b0e43aca56279315fae'
const QUERY_SEARCH = 'C';

describe('CATEGORIES ROUTES', () => {
    describe('GET /categories', () => {
        it('should return a list of categories', async () => {
            const response = await request(app)
                .get('/categories')
                .expect('content-type', /json/);

            expect(response.status).toEqual(200);
            expect(response.body).toBeInstanceOf(Array);
        });
    });

    describe('POST /admin/categories', () => {
        it('must register a new category', async () => {
            const response = await request(app)
                .post('/admin/categories')
                .send(NAME_NEW_CATEGORY);

            const newCategory = response.body;
            ID = newCategory._id;

            expect(response.status).toEqual(201);
            expect(newCategory).toBeInstanceOf(Object);
            expect(newCategory).toHaveProperty('nome');
            expect(newCategory).toHaveProperty('status');
            expect(newCategory.status).toEqual('ATIVA')
        });

        it('must check if the category already exist', async () => {
            const response = await request(app)
                .post('/admin/categories')
                .send(NAME_NEW_CATEGORY);

            expect(response.status).toEqual(409);
            expect(response.body.message).toEqual('Categoria já cadastrada!');
        });

        it('must register nothing when passing an empty body', async () => {
            const response = await request(app)
                .post('/admin/categories')
                .send({});

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "nome" é obrigatório!');
        });
    });

    describe('GET /categories/id', () => {
        it('should return the selected category', async () => {
            const response = await request(app).get(`/categories/${ID}`);
            
            expect(response.status).toEqual(200);
            expect(response.body).toHaveProperty('nome');
            expect(response.body).toHaveProperty('status');
            expect(response.body.nome).toEqual(NAME_NEW_CATEGORY.nome);
        });
        
        it('should return "category not found" when passing a code that does not exist', async () => {
            const response = await request(app).get(`/categories/${ID_INEXISTENTE}`);
            
            expect(response.body.message).toEqual('Categoria não localizada!');
            expect(response.status).toEqual(404);
        });
    });
    
    describe('GET /categories/search', () => {
        it('should return a list of categories with names that have the requested expression', async () => {
            const response = await request(app)
            .get(`/categories/search?categories=${QUERY_SEARCH}`);
            
            expect(response.status).toEqual(200);
            expect(response.body).toBeInstanceOf(Array);
        });
    });
    
    describe('PUT /admin/categories/id', () => {
        it('must change category name', async () => {
            const response = await request(app)
                .put(`/admin/categories/${ID}`)
                .send(UPDATE_NAME_CATEGORY);

            const responseAfterUpdate = await request(app).get(`/categories/${ID}`);
            const updatedCategory = responseAfterUpdate.body;
                
            expect(response.status).toEqual(201);
            expect(updatedCategory).toBeInstanceOf(Object);
            expect(updatedCategory).toHaveProperty('nome');
            expect(updatedCategory).toHaveProperty('status');
            expect(updatedCategory.nome).toEqual(UPDATE_NAME_CATEGORY.nome)
        });

        it('must check if the category already exist', async () => {
            const response = await request(app)
                .put(`/admin/categories/${ID}`)
                .send(UPDATE_NAME_CATEGORY);

            expect(response.status).toEqual(409);
            expect(response.body.message).toEqual('Categoria já cadastrada!');
        });

        it('must not change category name when passing an empty record', async () => {
            const response = await request(app)
                .put(`/admin/categories/${ID}`)
                .send({});

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "nome" é obrigatório!');
        });
    });

    describe('PATCH /admin/categories/id', () => {
        it('must change category status', async () => {
            let response = await request(app).get(`/categories/${ID}`);
            let { status } = response.body;
            if (status === 'ATIVA') {
                status = 'INATIVA';
            } else {
                status = 'ATIVA';
            };
            const respChangeStatus = await request(app)
                .patch(`/admin/categories/${ID}`)
                .send(status);

            expect(respChangeStatus.status).toEqual(201);
            expect(respChangeStatus.body.message)
                .toEqual(`Status da categoria atualizado para "${status}"!`);
        });
    });

    describe('DELETE /admin/categories/id', () => {
        it('should return code 404 when deleting a category', async () => {
            const response = await request(app).delete(`/admin/categories/${ID}`);

            expect(response.status).toEqual(204);
        });
    });
});
