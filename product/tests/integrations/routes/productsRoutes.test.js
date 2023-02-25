import request from 'supertest';
import {
    describe, expect, it, jest
} from '@jest/globals';
import app from '../../../src/app.js';
import DATATEST from '../../datatests/datatestes.js';

let server;
beforeEach(() => {
    const PORT = 3003;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

let ID;

const ID_INEXISTENTE = '66f76b0e43aca56279315fae'
const QUERY_SEARCH = 'C';

describe('PRODUCTS ROUTES', () => {
    describe('GET /products', () => {
        it('should return a list of products', async () => {
            const response = await request(app)
                .get('/products')
                .expect('content-type', /json/);

            expect(response.status).toEqual(200);
            expect(response.body).toBeInstanceOf(Array);
        });
    });

    describe('POST /admin/products', () => {
        it('must register a new product', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[0]);

            const newProduct = response.body;
            ID = newProduct._id;

            expect(response.status).toEqual(201);
            expect(newProduct).toBeInstanceOf(Object);
            expect(newProduct).toHaveProperty('nome');
            expect(newProduct).toHaveProperty('descricao');
            expect(newProduct).toHaveProperty('slug');
            expect(newProduct).toHaveProperty('precoUnitario');
            expect(newProduct).toHaveProperty('estoque');
            expect(newProduct).toHaveProperty('categoria');
            expect(newProduct).toStrictEqual({ ...DATATEST[0], _id: newProduct._id });
        });

        it('must check if the product already exist', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[0]);

            expect(response.status).toEqual(409);
            expect(response.body.message).toEqual('Produto já cadastrado!');
        });

        it('must register nothing when passing an empty body', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send({});

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "nome" é obrigatório!');
        });

        it('should return status code 400 when passing invalid id for category', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[2]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('ID categoria inválido!');
        });

        it('should return status code 400 when passing a non-existent category', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[3]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('Categoria não localizada!');
        });
    });

    // describe('GET /products/id', () => {
    //     it('should return the selected category', async () => {
    //         const response = await request(app).get(`/products/${ID}`);
            
    //         expect(response.status).toEqual(200);
    //         expect(response.body).toHaveProperty('nome');
    //         expect(response.body).toHaveProperty('status');
    //         expect(response.body.nome).toEqual(NAME_NEW_CATEGORY.nome);
    //     });
        
    //     it('should return "category not found" when passing a code that does not exist', async () => {
    //         const response = await request(app).get(`/products/${ID_INEXISTENTE}`);
            
    //         expect(response.body.message).toEqual('Categoria não localizada!');
    //         expect(response.status).toEqual(404);
    //     });
    // });
    
    // describe('GET /products/search', () => {
    //     it('should return a list of products with names that have the requested expression', async () => {
    //         const response = await request(app)
    //         .get(`/products/search?products=${QUERY_SEARCH}`);
            
    //         expect(response.status).toEqual(200);
    //         expect(response.body).toBeInstanceOf(Array);
    //     });
    // });
    
    // describe('PUT /admin/products/id', () => {
    //     it('must change category name', async () => {
    //         const response = await request(app)
    //             .put(`/admin/products/${ID}`)
    //             .send(UPDATE_NAME_CATEGORY);

    //         const responseAfterUpdate = await request(app).get(`/products/${ID}`);
    //         const updatedCategory = responseAfterUpdate.body;
                
    //         expect(response.status).toEqual(201);
    //         expect(updatedCategory).toBeInstanceOf(Object);
    //         expect(updatedCategory).toHaveProperty('nome');
    //         expect(updatedCategory).toHaveProperty('status');
    //         expect(updatedCategory.nome).toEqual(UPDATE_NAME_CATEGORY.nome)
    //     });

    //     it('must check if the category already exist', async () => {
    //         const response = await request(app)
    //             .put(`/admin/products/${ID}`)
    //             .send(UPDATE_NAME_CATEGORY);

    //         expect(response.status).toEqual(409);
    //         expect(response.body.message).toEqual('Categoria já cadastrada!');
    //     });

    //     it('must not change category name when passing an empty record', async () => {
    //         const response = await request(app)
    //             .put(`/admin/products/${ID}`)
    //             .send({});

    //         expect(response.status).toEqual(400);
    //         expect(response.body.message).toEqual('O campo "nome" é obrigatório!');
    //     });

    //     it('should return status code 404 if passed a non-existent id', async () => {
    //         const response = await request(app)
    //             .put(`/admin/products/${ID_INEXISTENTE}`)
    //             .send(NAME_NEW_CATEGORY);

    //         expect(response.status).toEqual(404);
    //         expect(response.body.message)
    //             .toEqual('Categoria não localizada!');
    //     });

    //     it('should return status code 400 if passed an invalid id', async () => {
    //         const response = await request(app).put('/admin/products/123');

    //         expect(response.status).toEqual(400);
    //         expect(response.body.message)
    //             .toEqual('ID inválido!');
    //     });
    // });

    // describe('PATCH /admin/products/id', () => {
    //     it('must change category status', async () => {
    //         const response = await request(app).get(`/products/${ID}`);
    //         let { status } = response.body;
    //         if (status === 'ATIVA') {
    //             status = 'INATIVA';
    //         } else {
    //             status = 'ATIVA';
    //         };
    //         const respChangeStatus = await request(app)
    //             .patch(`/admin/products/${ID}`)
    //             .send(status);

    //         expect(respChangeStatus.status).toEqual(201);
    //         expect(respChangeStatus.body.message)
    //             .toEqual(`Status da categoria atualizado para "${status}"!`);
    //     });

    //     it('should not change category status if code not found', async () => {
    //         const response = await request(app).get(`/products/${ID_INEXISTENTE}`);

    //         expect(response.status).toEqual(404);
    //         expect(response.body.message)
    //             .toEqual('Categoria não localizada!');
    //     });

    //     it('should return status code 400 if passed an invalid id', async () => {
    //         const response = await request(app).get('/products/123');

    //         expect(response.status).toEqual(400);
    //         expect(response.body.message)
    //             .toEqual('ID inválido!');
    //     });
    // });

    describe('DELETE /admin/products/id', () => {
        it('should return code 204 when deleting a category', async () => {
            const response = await request(app).delete(`/admin/products/${ID}`);

            expect(response.status).toEqual(204);
        });

        it('should return status code 404 if passed a non-existent id', async () => {
            const response = await request(app).delete(`/admin/products/${ID_INEXISTENTE}`);

            expect(response.status).toEqual(404);
            expect(response.body.message)
                .toEqual('Categoria não localizada!');
        });

        it('should return status code 400 if passed an invalid id', async () => {
            const response = await request(app).delete('/admin/products/123');

            expect(response.status).toEqual(400);
            expect(response.body.message)
                .toEqual('ID inválido!');
        });
    });
});
