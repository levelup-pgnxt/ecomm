/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import request from 'supertest';
import {
  afterAll,
  beforeAll,
  describe, expect, it, jest,
} from '@jest/globals';
import mongoose from 'mongoose';
import app from '../../src/app.js';

beforeAll(async () => {
  await mongoose.connect('mongodb://admin:secret@mongodb:27017/ecomm-account-test?authSource=admin');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET em /api/admin/accounts', () => {
  it('Deve retornar uma lista de usuarios', async () => {
    await request(app)
      .get('/api/admin/accounts')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idResposta;

describe('POST em /api/admin/accounts', () => {
  it('Deve adicionar um novo usuario', async () => {
    const resposta = await request(app)
      .post('/api/admin/accounts')
      .send({
        name: 'Matheus Jones',
        email: 'email@example.com',
        password: 'Senha@Teste123',
        cpf: 45896587456,
        phone: 5511969696558,
        address: {
          street: 'Rua Teste',
          number: '123a',
          complement: 'Proximo a Avenida',
          district: 'Jd Sao Luis',
          cep: 14285450,
          city: 'Sao Paulo',
          uf: 'SP',
        },
      })
      .expect(201);

    idResposta = resposta.body._id;
  });
});

describe('GET em /api/admin/accounts/id', () => {
  it('Deve retornar um usuario específico', async () => {
    await request(app)
      .get(`/api/admin/accounts/${idResposta}`)
      .expect(200);
  });
});

describe('PUT em /api/admin/accounts/id', () => {
  // eslint-disable-next-line no-undef
  test.each([
    ['name', { name: 'Novo Nome do Usuario de Teste' }],
    ['email', { email: 'newemail@example.com' }],
    ['password', { password: 'NewPassword$123' }],
    ['cpf', { cpf: 65478521657 }],
    ['phone', { phone: 5511414255252 }],
    ['addressStreet', { address: { street: 'Nova rua' } }],
    ['addressNumber', { address: { number: 'S/N' } }],
    ['addressComplement', { address: { complement: 'Bloco 7' } }],
    ['addressDistrict', { address: { district: 'Vila Livramento' } }],
    ['addressCep', { address: { cep: 15426854 } }],
    ['addressCity', { address: { city: 'Sao Bernardo' } }],
    ['addressUf', { address: { uf: 'RS' } }],
  ])('Deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/api/admin/accounts/${idResposta}`)
      .send(param)
      .expect(204);

    expect(spy).toHaveBeenCalled();
  });
});

describe('DELETE em /api/admin/accounts/id', () => {
  it('Deletar o produto adicionado', async () => {
    await request(app)
      .delete(`/api/admin/accounts/${idResposta}`)
      .expect(200);
  });
});
