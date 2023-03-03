/* eslint-disable import/no-extraneous-dependencies */
const request = require('supertest');
const { describe, it } = require('@jest/globals');
const app = require('../app.js');

let idResposta;

describe('POST em /payments', () => {
  it('Deve adicionar um novo pagamento', async () => {
    const resposta = await request(app)
      .post('/payments')
      .send({
        valor: 777,
        nome: 'PAGAMENTO DE TESTE',
        numeroCartao: '5531109463210225',
        expiracaoCartao: '2023-12',
        cvvCartao: 777,
      })
      .expect(201);

    idResposta = resposta.body.id;
  });
});

describe('GET em /admin/payments/id', () => {
  it('Deve retornar uma categoria específica', async () => {
    await request(app)
      .get(`/admin/payments/${idResposta}`)
      .expect(200);
  });
});

describe('PATCH em /admin/payments/id', () => {
  it('Deve alterar o campo status', async () => {
    await request(app)
      .patch(`/admin/payments/${idResposta}`)
      .send({
        status: 'CANCELADO',
      })
      .expect(200);
  });
});
