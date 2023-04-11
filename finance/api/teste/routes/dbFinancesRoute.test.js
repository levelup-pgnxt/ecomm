const { describe, it } = require('@jest/globals');
const request = require('supertest');
const app = require('../../index');

// let server;
// beforeAll(() => {
//   const port = 3008;
//   server = app.listen(port);
// });

// afterAll(() => {
//   server.close();
// });

describe('GET em /payments', () => {
  it('Deve retornar todas os pagamentos', async () => {
    await request(app)
      .get('/payments')
      .expect(200);
  });
});

// teste de criação
let idResposta;
describe('POST em /payments', () => {
  it('Deve criar um pagamento', async () => {
    const resposta = await request(app)
      .post('/payments')
      .send({
        valor: 5555,
        nome: 'testeland Italia',
        numero: 44444,
        expiracao: '2023-05',
        status: 'CRIADO',
      })
      .expect('content-type', /json/)
      .expect(200);
    idResposta = resposta.body.id;
  });
});

// teste de detalhamento
describe('GET em /payments/:id', () => {
  it('Deve retornar um pagamento especifico', async () => {
    await request(app)
      .get(`/payments/${idResposta}`)
      .expect(200);
    // colocar o status correto é extremamente importante
  });
});

// teste de status
describe('put em /payments/:id', () => {
  it('Deve atualizar uma categoria especifica', async () => {
    await request(app)
      .put(`/payments/${idResposta}`)
      .send({
        status: 'CONFIRMADO',
      })
      .expect(200);
    // colocar o status correto é extremamente importante
  });
});

// teste de apagar
describe('DELETE em /payments/:id', () => {
  it('Deve apagar uma categoria', async () => {
    await request(app)
      .delete(`/payments/${idResposta}`)
      .expect(200);
    // colocar o status correto é extremamente importante
  });
});
