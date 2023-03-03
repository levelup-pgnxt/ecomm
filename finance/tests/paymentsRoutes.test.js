const request = require('supertest');
const { describe, expect, it, jest } = require('@jest/globals');

const DATATEST = require('./datatests/datatests');
const STATUS = require('../src/auxiliaries/constant');
const app = require('../src/app');

jest.useRealTimers();

let ID;

let server;
beforeEach(() => {
  const PORT = 3002;
  server = app.listen(PORT, () => console.log(
    `Servidor está rodando em http://localhost:${PORT}`,
  ));
});

afterEach(() => {
  server.close();
});

describe('PAYMENTS ROUTES', () => {
  // describe('GET /categories', () => {
  //   it('should return a list of categories', async () => {
  //     const response = await request(app)
  //       .get('/categories')
  //       .expect('content-type', /json/);

  //     expect(response.status).toEqual(200);
  //     expect(response.body).toBeInstanceOf(Array);
  //   });
  // });

  describe('POST /payments', () => {
    it('must register a new payment', async () => {
      // jest.useFakeTimers('legacy');
      jest.setTimeout(10 * 1000);
      const response = await request(app)
        .post('/payments')
        .send({ ...DATATEST[0], status: STATUS[0] });

      console.log(response);

      const newPayment = response.body;
      ID = newPayment.id;

      expect(response.status).toEqual(201);
      expect(newPayment).toBeInstanceOf(Object);
      expect(newPayment).toHaveProperty('value');
      expect(newPayment).toHaveProperty('name');
      expect(newPayment).toHaveProperty('number');
      expect(newPayment).toHaveProperty('expiration');
      expect(newPayment).toHaveProperty('cvv');
      expect(newPayment).toHaveProperty('status');
      expect(newPayment.status).toEqual(DATATEST[0]);
    }, 30000);

    // it('must check if the category already exist', async () => {
    //   const response = await request(app)
    //     .post('/admin/categories')
    //     .send(NAME_NEW_CATEGORY);

    //   expect(response.status).toEqual(409);
    //   expect(response.body.message).toEqual('Categoria já cadastrada!');
    // });

    // it('must register nothing when passing an empty body', async () => {
    //   const response = await request(app)
    //     .post('/admin/categories')
    //     .send({});

    //   expect(response.status).toEqual(400);
    //   expect(response.body.message).toEqual('O campo "nome" é obrigatório!');
    // });
  });

  // describe('GET /categories/id', () => {
  //   it('should return the selected category', async () => {
  //     const response = await request(app).get(`/categories/${ID}`);

  //     expect(response.status).toEqual(200);
  //     expect(response.body).toHaveProperty('nome');
  //     expect(response.body).toHaveProperty('status');
  //     expect(response.body.nome).toEqual(NAME_NEW_CATEGORY.nome);
  //   });

  //   it('should return "category not found" when passing a code that does not exist', async () => {
  //     const response = await request(app).get(`/categories/${ID_INEXISTENTE}`);

  //     expect(response.body.message).toEqual('Categoria não localizada!');
  //     expect(response.status).toEqual(404);
  //   });

  //   it('should return status code 400 when passing an invalid category ID', async () => {
  //     const response = await request(app).get('/categories/1234567890');

  //     expect(response.body.message).toEqual('ID inválido!');
  //     expect(response.status).toEqual(400);
  //   });
  // });

  // describe('GET /categories/search', () => {
  //   it('should return a list of categories with names that have the requested expression', async () => {
  //     const response = await request(app)
  //       .get(`/categories/search?categories=${QUERY_SEARCH}`);

  //     expect(response.status).toEqual(200);
  //     expect(response.body).toBeInstanceOf(Array);
  //   });
  // });

  // describe('PUT /admin/categories/id', () => {
  //   it('must change category name', async () => {
  //     const response = await request(app)
  //       .put(`/admin/categories/${ID}`)
  //       .send(UPDATE_NAME_CATEGORY);

  //     const responseAfterUpdate = await request(app).get(`/categories/${ID}`);
  //     const updatedCategory = responseAfterUpdate.body;

  //     expect(response.status).toEqual(201);
  //     expect(updatedCategory).toBeInstanceOf(Object);
  //     expect(updatedCategory).toHaveProperty('nome');
  //     expect(updatedCategory).toHaveProperty('status');
  //     expect(updatedCategory.nome).toEqual(UPDATE_NAME_CATEGORY.nome);
  //   });

  //   it('must check if the category already exist', async () => {
  //     const response = await request(app)
  //       .put(`/admin/categories/${ID}`)
  //       .send(UPDATE_NAME_CATEGORY);

  //     expect(response.status).toEqual(409);
  //     expect(response.body.message).toEqual('Categoria já cadastrada!');
  //   });

  //   it('must not change category name when passing an empty record', async () => {
  //     const response = await request(app)
  //       .put(`/admin/categories/${ID}`)
  //       .send({});

  //     expect(response.status).toEqual(400);
  //     expect(response.body.message).toEqual('O campo "nome" é obrigatório!');
  //   });

  //   it('should return status code 404 if passed a non-existent id', async () => {
  //     const response = await request(app)
  //       .put(`/admin/categories/${ID_INEXISTENTE}`)
  //       .send(NAME_NEW_CATEGORY);

  //     expect(response.status).toEqual(404);
  //     expect(response.body.message)
  //       .toEqual('Categoria não localizada!');
  //   });

  //   it('should return status code 400 if passed an invalid id', async () => {
  //     const response = await request(app).put('/admin/categories/123');

  //     expect(response.status).toEqual(400);
  //     expect(response.body.message)
  //       .toEqual('ID inválido!');
  //   });
  // });

  // describe('PATCH /admin/categories/id', () => {
  //   it('must change category status', async () => {
  //     let response = await request(app).get(`/categories/${ID}`);
  //     let { status } = response.body;
  //     const statusA = status;
  //     if (status === 'ATIVA') {
  //       status = 'INATIVA';
  //     } else {
  //       status = 'ATIVA';
  //     }
  //     const respChangeStatus = await request(app)
  //       .patch(`/admin/categories/${ID}`);

  //     response = await request(app).get(`/categories/${ID}`);
  //     const statusB = response.body.status;
  //     expect(respChangeStatus.status).toEqual(201);
  //     expect(respChangeStatus.body.message)
  //       .toEqual(`Status da categoria atualizado para "${status}"!`);
  //     expect(statusB).not.toEqual(statusA);

  //     await request(app).patch(`/admin/categories/${ID}`);

  //     response = await request(app).get(`/categories/${ID}`);
  //     const statusC = response.body.status;

  //     expect(statusC).not.toEqual(statusB);
  //     expect(statusC).toEqual(statusA);
  //   });

  //   it('should not change category status if code not found', async () => {
  //     const response = await request(app).patch(`/admin/categories/${ID_INEXISTENTE}`);

  //     expect(response.status).toEqual(404);
  //     expect(response.body.message)
  //       .toEqual('Categoria não localizada!');
  //   });

  //   it('should return status code 400 if passed an invalid id', async () => {
  //     const response = await request(app).patch('/admin/categories/123');

  //     expect(response.status).toEqual(400);
  //     expect(response.body.message)
  //       .toEqual('ID inválido!');
  //   });
  // });

  // describe('DELETE /admin/categories/id', () => {
  //   it('should return code 204 when deleting a category', async () => {
  //     const response = await request(app).delete(`/admin/categories/${ID}`);

  //     expect(response.status).toEqual(204);
  //   });

  //   it('should return status code 404 if passed a non-existent id', async () => {
  //     const response = await request(app).delete(`/admin/categories/${ID_INEXISTENTE}`);

  //     expect(response.status).toEqual(404);
  //     expect(response.body.message)
  //       .toEqual('Categoria não localizada!');
  //   });

  //   it('should return status code 400 if passed an invalid id', async () => {
  //     const response = await request(app).delete('/admin/categories/123');

  //     expect(response.status).toEqual(400);
  //     expect(response.body.message)
  //       .toEqual('ID inválido!');
  //   });
  // });
});
