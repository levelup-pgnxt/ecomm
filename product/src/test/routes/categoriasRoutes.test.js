import app from '../../app.js';
import request from 'supertest';
import {
    describe, expect, it, jest,
  } from '@jest/globals';


describe('GET em /api/categories', () => {
    it('Deve retornar uma lista de categorias', async () => {
        await request(app)
            .get('/api/categories')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
    })
});

let idResposta;

describe('POST em /api/admin/categories', () => {
    it('Deve adicionar uma nova categoria', async () => {
        const resposta = await request(app)
            .post('/api/admin/categories')
            .send({
                nome: "TESTE",
                status: "ATIVA"
            })
            .expect(201)

        idResposta = resposta.body._id;
    });
});

describe('GET em /api/categories/id', () => {
    it('Deve retornar uma categoria específica', async () => {
        await request(app)
            .get(`/api/categories/${idResposta}`)
            .expect(200)
    })
})

describe('PUT em /api/admin/categories/id', () => {
    test.each([
        ['nome', {nome: 'NOVO NOME TESTE'}],
        ['status', {status: 'INATIVA'}],
    ])('Deve alterar o campo %s', async (chave, param) => {
        const requisicao = { request };
        const spy = jest.spyOn(requisicao, 'request');
        await requisicao.request(app)
            .put(`/api/admin/categories/${idResposta}`)
            .send(param)
            .expect(204);
        
        expect(spy).toHaveBeenCalled();
    })
})

describe('PATCH em /api/admin/categories/id', () => {
    it('Deve alterar o campo status para ATIVA', async () => {
        await request(app)
            .patch(`/api/admin/categories/${idResposta}`)
            .expect(200)
    })
})

describe('DELETE em /api/admin/categories/id', () => {
    it('Deletar a categoria adicionada', async () => {
        await request(app)
            .delete(`/api/admin/categories/${idResposta}`)
            .expect(200)
    })
})