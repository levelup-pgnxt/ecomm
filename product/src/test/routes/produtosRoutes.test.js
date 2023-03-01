import app from '../../app.js';
import request from 'supertest';
import { response } from 'express';

describe('GET em /api/produtos', () => {
    it('Deve retornar uma lista de produtos', async () => {
        await request(app)
            .get('/api/produtos')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
    })
});

let idResposta;

describe('POST em /api/admin/produtos', () => {
    it('Deve adicionar um novo produto', async () => {
        const resposta = await request(app)
            .post('/api/admin/produtos')
            .send({
                nome: "Novo Produto de Teste",
                descricao: "Produto de Teste da Semana de Teste",
                slug: "produto-teste",
                precoUnitario: 999.99,
                quantidadeEmEstoque: 1,
                categoria: {
                    nome: "INFORMÁTICA",
                    idCategoria: "63e0e4d4dd85b8c7425f926f"
                }
            })
            .expect(201)

        idResposta = resposta.body._id;
    });
});


describe('DELETE em /api/admin/produtos/id', () => {
    it('Deletar o produto adicionado', async () => {
        await request(app)
            .delete(`/api/admin/produtos/${idResposta}`)
            .expect(200)
    })
})