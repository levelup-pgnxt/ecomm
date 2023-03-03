/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../app';
import db from '../../config/dbConnect';

beforeAll(async () => {
  db.once('open', () => {});
});

afterAll(async () => {
  await db.close();
});

describe('GET em /api/produtos', () => {
  it('Deve retornar todas os produtos', async () => {
    await request(app)
      .get('/api/produtos')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idResposta;
describe('POST em /api/admin/produtos', () => {
  it('Deve criar um novo produto', async () => {
    const resposta = await request(app)
      .post('/api/admin/produtos')
      .send({
        produto: 'Notebook teste',
        descricao: 'Samsung teste',
        slug: 'teste',
        preco_unitario: {
          $numberDecimal: '3333',
        },
        quantidade: 33,
        categoria: 'teste',
      })
      .expect('content-type', /json/)
      .expect(201);

    idResposta = resposta.body._id;
  });
});

describe('GET em /api/produtos/:id', () => {
  it('Deve retornar um produto especifico', async () => {
    await request(app)
      .get(`/api/produtos/${idResposta}`)
      .expect(200);
    // colocar o status correto é extremamente importante
    // console.log("body..", body)
  });
});

describe('PATCH em /api/admin/produtos/:id', () => {
  it('Deve zerar uma quantidade especifica', async () => {
    await request(app)
      .patch(`/api/admin/produtos/${idResposta}`)
      .expect(200);
    // colocar o status correto é extremamente importante
  });
});

describe('put em /api/admin/produtos/:id', () => {
  it('Deve atualizar uma categoria especifica', async () => {
    await request(app)
      .put(`/api/admin/produtos/${idResposta}`)
      .send({
        categoria: 'testeTeste',
      })
      .expect(200);
    // colocar o status correto é extremamente importante
  });
});

describe('DELETE em /api/admin/produtos/:id', () => {
  it('Deve apagar uma categoria', async () => {
    await request(app)
      .delete(`/api/admin/produtos/${idResposta}`)
      .expect(200);
    // colocar o status correto é extremamente importante
  });
});
