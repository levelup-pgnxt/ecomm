/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import request from 'supertest';
import {
  afterAll,
  beforeAll,
  describe, it,
} from '@jest/globals';
// import mongoose from 'mongoose';
import app from '../../app.js';

// beforeAll(async () => {
//   await mongoose.connect('mongodb://admin:secret@mongodb:27017/ecomm-order-test?authSource=admin');
// });

// afterAll(async () => {
//   await mongoose.connection.close();
// });

let idResposta;

describe('POST em /api/order', () => {
  it('Deve adicionar um novo order', async () => {
    const resposta = await request(app)
      .post('/api/order')
      .send({
        clienteId: '63e0e6183d0e56e9d00e3dd3',
        enderecoDeEntrega: {
          rua: 'Avenida Qualquer Coisa',
          numero: 12,
          complemento: 'bloco 4',
          bairro: 'Jd Sao Avestruz',
          cep: 14182127,
          cidade: 'Sao Paulo',
          estado: 'SP',
        },
        itens: [
          {
            produtoId: '63e0e46c99879b1c988cfbe7',
            quantidade: 1,
            valorDesconto: 777,
            precoUnitario: 77,
          },
        ],
      })
      .expect(201);

    idResposta = resposta.body._id;
  });
});

describe('PATCH em /api/order/id', () => {
  it(
    'Deve alterar o campo status para REALIZADO e passar as informações necessárias para emitir a nota fiscal e confirmar o pagamento',
    async () => {
      await request(app)
        .patch(`/api/order/${idResposta}`)
        .send({
          clienteId: '63e0e6183d0e56e9d00e3dd3',
          paymentId: '61',
          status: 'CONFIRMADO',
          descricao: {
            nomeCliente: 'Matheus Leme',
            cpfCliente: '123456789-41',
            enderecoCliente: {
              cep: '04182-127',
              rua: 'Avenida Qualquer Coisa',
              cidade: 'Sao Paulo',
              estado: 'RS',
              numero: 's/n',
              complemento: 'bloco 4',
            },
            itensPedido: [
              {
                quantidade: 1,
                nomeProduto: 'item1',
                precoEfetivo: 20,
              },
            ],
          },
        })
        .expect(200);
    },
  );
});
