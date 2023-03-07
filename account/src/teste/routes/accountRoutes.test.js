import request from 'supertest';
import app from '../../app.js';
import db from '../../config/dbConnect.js';

beforeAll(async () => {
  db.once('open', () => {});
});

afterAll(async () => {
  await db.close();
});

// .get('/api/accounts', AccountsController.listarAccounts)
//   .get('/api/accounts/:id', AccountsController.listarAccountsPorId)
//   .post('/api/admin/accounts', AccountsController.inserirAccounts)
//   .put('/api/admin/accounts/:id', AccountsController.atualizarAccounts)
//   .delete('/api/admin/accounts/:id', AccountsController.excluirAccounts)

describe('GET em /api/accounts', () => {
  it('Deve retornar todas as accounts', async () => {
    await request(app)
      .get('/api/accounts')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idResposta;
describe('POST em /api/admin/accounts', () => {
  it('Deve criar um account', async () => {
    const resposta = await request(app)
      .post('/api/admin/accounts')
      .send({
        nome: 'isac teste teste',
        email: 'isac2@gmail.com',
        senha: 'senha2',
        dataCriacao: 'Thu Mar 02 2023 17:45:07 GMT-0300 (Horário Padrão de Brasília)',
        cpf: '230024835',
        telefone: '42280873',
        endereco: {
            rua_endereco: 'rua tal 2',
            n_endereco: '11',
            complemento: 'alameda tal',
            cep: '55513233',
            cidade: 'belem 3',
            estado: 'para3'
        }
      })
      .expect('content-type', /json/)
      .expect(201);
    idResposta = resposta.body._id;
  });
});

describe('GET em /api/accounts/:id', () => {
  it('Deve retornar um account especifica', async () => {
    await request(app)
      .get(`/api/accounts/${idResposta}`)
      .expect(200);
    // colocar o status correto é extremamente importante
  });
});

// describe('PATCH em /api/categories/:id', () => {
//   it('Deve ATIVAR um account especifica', async () => {
//     await request(app)
//       .patch(`/api/admin/categories/${idResposta}`)
//       .expect(200);
//     // colocar o status correto é extremamente importante
//   });
// });

describe('put em /api/admin/accounts/:id', () => {
  it('Deve atualizar um account especifica', async () => {
    await request(app)
      .put(`/api/admin/accounts/${idResposta}`)
      .send({
        NOME: 'ANIMACAOTESTE',
      })
      .expect(200);
    // colocar o status correto é extremamente importante
  });
});

describe('DELETE em /api/admin/accounts/:id', () => {
  it('Deve apagar um account', async () => {
    await request(app)
      .delete(`/api/admin/accounts/${idResposta}`)
      .expect(200);
    // colocar o status correto é extremamente importante
  });
});
