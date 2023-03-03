/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import request from 'supertest';
import {
  afterAll,
  beforeAll,
  describe, expect, it, jest,
} from '@jest/globals';
import mongoose from 'mongoose';
import app from '../../app.js';

beforeAll(async () => {
  await mongoose.connect('mongodb://admin:secret@mongodb:27017/ecomm-product-test?authSource=admin');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET em /api/produtos', () => {
  it('Deve retornar uma lista de produtos', async () => {
    await request(app)
      .get('/api/produtos')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idResposta;

describe('POST em /api/admin/produtos', () => {
  it('Deve adicionar um novo produto', async () => {
    const resposta = await request(app)
      .post('/api/admin/produtos')
      .send({
        nome: 'Novo Produto de Teste',
        descricao: 'Produto de Teste da Semana de Teste',
        slug: 'produto-teste',
        precoUnitario: 999.99,
        quantidadeEmEstoque: 1,
        categoria: {
          nome: 'INFORMÁTICA',
          idCategoria: '63e0e4d4dd85b8c7425f926f',
        },
      })
      .expect(201);

    idResposta = resposta.body._id;
  });
});

describe('GET em /api/produtos/id', () => {
  it('Deve retornar um produto específico', async () => {
    await request(app)
      .get(`/api/produtos/${idResposta}`)
      .expect(200);
  });
});

describe('PUT em /api/admin/produtos/id', () => {
  // eslint-disable-next-line no-undef
  test.each([
    ['nome', { nome: 'Novo Nome do Produto de Teste' }],
    ['descricao', { descricao: 'Nova Descricao do Produto de Teste' }],
    ['slug', { slug: 'Nova Slug do Produto de Teste' }],
    ['precoUnitario', { precoUnitario: 123456 }],
    ['quantidadeEmEstoque', { quantidadeEmEstoque: 10 }],
    ['categoria', { categoria: { nome: 'LIVROS', idCategoria: '63e0e4d4dd85b8c7425f9276' } }],
  ])('Deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/api/admin/produtos/${idResposta}`)
      .send(param)
      .expect(204);

    expect(spy).toHaveBeenCalled();
  });
});

describe('DELETE em /api/admin/produtos/id', () => {
  it('Deletar o produto adicionado', async () => {
    await request(app)
      .delete(`/api/admin/produtos/${idResposta}`)
      .expect(200);
  });
});
