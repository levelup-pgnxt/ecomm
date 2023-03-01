import request from 'supertest';
import {
    describe, expect, it, jest
} from '@jest/globals';
import app from '../../../src/app.js';
import DATATEST from '../../datatests/datatestes.js';

let server;
beforeEach(() => {
    const PORT = 3000;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

let ID;
let newCategory;

const ID_INEXISTENTE = '66f76b0e43aca56279315fae'
const QUERY_SEARCH = 'Note';

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
            expect(response.body.message).toEqual('Objeto vazio, sem propriedades!');
        });

        it('should return status code 400 when passed a non-text type for the name', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[5]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "nome" deve ser do tipo texto!');
        });

        it('should return status code 400 when passed empty field for name', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[6]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "nome" não deve ser vazio!');
        });

        it('should return status code 422 when passed a name with less than 3 characters', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[7]);

            expect(response.status).toEqual(422);
            expect(response.body.message).toEqual('O campo "nome" deve ter no mínimo 3 caracteres!');
        });

        it('should return status code 400 when passed a name that does not start with a capital letter', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[8]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "nome" deve iniciar por uma letra maiúscula!');
        });

        it('should return status code 400 when not passed a name', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[9]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "nome" é obrigatório!');
        });

        it('should return status code 400 when passed a non-text type for the description', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[10]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "descrição" deve ser do tipo texto!');
        });

        it('should return status code 400 when passed empty field for the description', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[11]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "descrição" não deve ser vazio!');
        });

        it('should return status code 422 when passed the description with less than 3 characters', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[12]);

            expect(response.status).toEqual(422);
            expect(response.body.message).toEqual('O campo "descrição" deve ter no mínimo 3 caracteres!');
        });

        it('should return status code 400 when passed the description that does not start with a capital letter', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[13]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "descrição" deve iniciar por uma letra maiúscula!');
        });

        it('should return status code 400 when not passed the description', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[14]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "descrição" é obrigatório!');
        });

        it('should return status code 400 when passed a non-text type for to slug', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[15]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "slug" deve ser do tipo texto!');
        });

        it('should return status code 400 when passed empty field for to slug', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[16]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "slug" não deve ser vazio!');
        });

        it('should return status code 422 when passed the slug with less than 3 characters', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[17]);

            expect(response.status).toEqual(422);
            expect(response.body.message).toEqual('O campo "slug" deve ter no mínimo 3 caracteres!');
        });

        it('should return status code 400 when passed the slug that does not start with a capital letter', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[18]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "slug" deve conter apenas letras(maiúsculas ou minúsculas), números ou hífens!');
        });

        it('should return status code 400 when not passed the slug', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[19]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "slug" é obrigatório!');
        });

        it('must be of numeric type', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[20]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "preço unitário" deve ser do tipo numérico!');
        });

        it('the value must be greater than zero', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[21]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "preço unitário" deve ser maior que zero!');
        });

        it('should return status code 400 when not passing the unit price field', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[22]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "preço unitário" é obrigatório!');
        });

        it('must be of numeric type', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[23]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "estoque" deve ser do tipo numérico!');
        });

        it('Inventory value must be greater than zero', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[24]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "estoque" deve ser maior que zero!');
        });

        it('Inventory value must be less than ten thousand', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[25]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "estoque" deve ser menor que 10.000!');
        });

        it('should return status code 400 when not passing the stock field', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[26]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "estoque" é obrigatório!');
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

        it('should return status code 400 when passing a non-string type to category', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[27]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "categoria" deve ser do tipo texto!');
        });

        it('should return status code 400 when passing an empty field to category', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[28]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "categoria" não deve ser vazio!');
        });

        it('should return status code 400 when not passing the category field', async () => {
            const response = await request(app)
                .post('/admin/products')
                .send(DATATEST[29]);

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O campo "categoria" é obrigatório!');
        });

        it('should return status code 400 when passing an inactive category', async () => {
            const responseCategory = await request(app)
                .post('/admin/categories')
                .send(DATATEST[30])

            newCategory = responseCategory.body;
            await request(app)
                .patch(`/admin/categories/${newCategory._id}`)
                .send('INATIVA');

             const response = await request(app)
                .post('/admin/products')
                .send({ ...DATATEST[31], categoria: newCategory._id });

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('Categoria Inativa!');
        });
    });

    describe('GET /products/id', () => {
        it('should return the selected product', async () => {
            const response = await request(app).get(`/products/${ID}`);
            const categoria = response.body.categoria;
            
            expect(response.status).toEqual(200);
            expect(response.body).toBeInstanceOf(Object);
            expect(response.body).toHaveProperty('nome');
            expect(response.body).toHaveProperty('descricao');
            expect(response.body).toHaveProperty('slug');
            expect(response.body).toHaveProperty('precoUnitario');
            expect(response.body).toHaveProperty('estoque');
            expect(response.body).toHaveProperty('categoria');
            expect(response.body).toStrictEqual({ ...DATATEST[0], _id: ID, categoria });
        });
        
        it('should return "product not found" when passing a code that does not exist', async () => {
            const response = await request(app).get(`/products/${ID_INEXISTENTE}`);
            
            expect(response.body.message).toEqual('Produto não localizado!');
            expect(response.status).toEqual(404);
        });
    });
    
    describe('GET /products/search', () => {
        it('should return a list of products with names that have the requested expression', async () => {
            const response = await request(app)
            .get(`/products/search?products=${QUERY_SEARCH}`);
            
            expect(response.status).toEqual(200);
            expect(response.body).toBeInstanceOf(Array);
        });
    });
    
    describe('GET /products/search-by-value', () => {
        it('must have a list of products with unit prices between the requested values', async () => {
            const MAX = 10000;
            const MIN = 2500;
            const response = await request(app)
            .get(`/products/search-by-value?max=${MAX}&min=${MIN}`);
            
            expect(response.status).toEqual(200);
            expect(response.body).toBeInstanceOf(Array);
        });

        it('should return status code 405 when passing min value greater than max value', async () => {
            const MAX = 2500;
            const MIN = 10000;
            const response = await request(app)
            .get(`/products/search-by-value?max=${MAX}&min=${MIN}`);
            
            expect(response.status).toEqual(405);
            expect(response.body.message).toEqual('Valor mínimo maior que valor máximo. Operação não permitida!');
        });

        it('should should return status code 400 when passing a non-numeric type for the maximum value', async () => {
            const MAX = 'abc';
            const MIN = 10000;
            const response = await request(app)
            .get(`/products/search-by-value?max=${MAX}&min=${MIN}`);
            
            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O "valor máximo" deve ser do tipo numérico!');
        });

        it('should should return status code 400 when passing a non-numeric type for the minimum value', async () => {
            const MAX = 10000;
            const MIN = 'abc';
            const response = await request(app)
            .get(`/products/search-by-value?max=${MAX}&min=${MIN}`);
            
            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O "valor mínimo" deve ser do tipo numérico!');
        });
    
        it('should return status code 400 when passing the maximum value less than or equal to zero', async () => {
            const MAX = 0;
            const MIN = 2500;
            const response = await request(app)
            .get(`/products/search-by-value?max=${MAX}&min=${MIN}`);
            
            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O "valor máximo" deve ser maior que zero!');
        });
    
        it('should return status code 400 when passing the minimum value less than or equal to zero', async () => {
            const MAX = 10000;
            const MIN = -2500;
            const response = await request(app)
            .get(`/products/search-by-value?max=${MAX}&min=${MIN}`);
            
            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O "valor mínimo" deve ser maior que zero!');
        });

        it('should return status code 400 when not passing the maximum value', async () => {
            const MIN = -2500;
            const response = await request(app)
            .get(`/products/search-by-value?min=${MIN}`);
            
            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O "valor máximo" é obrigatório!');
        });
    
        it('should return status code 400 when not passing the minimum value', async () => {
            const MAX = 10000;
            const response = await request(app)
            .get(`/products/search-by-value?max=${MAX}`);
            
            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O "valor mínimo" é obrigatório!');
        });
    });

    describe('PUT /admin/products/id', () => {
        it.each([
            ['nome', { nome: DATATEST[1].nome }],
            ['descrição', { descricao: DATATEST[1].descricao }],
            ['preço unitário', { precoUnitario: DATATEST[1].precoUnitario }],
            ['estoque', { estoque: DATATEST[1].estoque }],
        ])('must change field %s', async (key, params) => {
            const requisicao = { request };
            const spy = jest.spyOn(requisicao, 'request');
            await requisicao.request(app)
                .put(`/admin/products/${ID}`)
                .send(params)
                .expect(204);

            expect(spy).toHaveBeenCalled();
        });

        it('must check if the product already exist', async () => {
            const response = await request(app)
                .put(`/admin/products/${ID}`)
                .send(DATATEST[1]);

            expect(response.status).toEqual(409);
            expect(response.body.message).toEqual('Produto já cadastrado!');
        });

        it('must not change any product field when passing an empty object', async () => {
            const response = await request(app)
                .put(`/admin/products/${ID}`)
                .send({});

            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('Objeto vazio, sem propriedades!');
        });

        it('should return status code 404 if passed a non-existent id', async () => {
            const response = await request(app)
                .put(`/admin/products/${ID_INEXISTENTE}`)
                .send(DATATEST[0]);

            expect(response.status).toEqual(404);
            expect(response.body.message)
                .toEqual('Produto não localizado!');
        });

        it('should return status code 400 if passed an invalid id', async () => {
            const response = await request(app).put('/admin/products/123');

            expect(response.status).toEqual(400);
            expect(response.body.message)
                .toEqual('ID inválido!');
        });
    });

    describe('DELETE /admin/products/id', () => {
        it('should return code 204 when deleting a product', async () => {
            const response = await request(app).delete(`/admin/products/${ID}`);
            await request(app).delete(`/admin/categories/${newCategory._id}`);

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
