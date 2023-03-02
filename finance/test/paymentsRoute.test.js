const request = require('supertest');
const {
  afterEach, beforeEach, describe, it,
} = require('@jest/globals');
const app = require('../src/index.js');

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET in /payments', () => {
  it('Should return a list of all payments', async () => {
    await request(app)
      .get('/payments')
      .expect(200);
  });
});

let paymentId;

describe('POST in /payments', () => {
  it('Should add a new payment', async () => {
    const res = await request(app)
      .post('/payments')
      .send({
        status: 'CRIADO',
        cvv: 123,
        expirationDate: '01/01/2001',
        cardNumber: '0000000000000000',
        nameCard: 'TestPayment',
        monetaryValue: 123.12,
      })
      .expect(201);
    paymentId = res.body.id;
  });
  it('Should not add an empty payment', async () => {
    await request(app)
      .post('/payments')
      .send({})
      .expect(500);
  });
});

describe('GET in /payments/:id', () => {
  it('Should return a payment by id', async () => {
    await request(app)
      .get(`/payments/${paymentId}`)
      .expect(200);
  });
});

describe('PUT in /payments/:id', () => {
  it('Should cancel the payment', async () => {
    await request(app)
      .put(`/payments/${paymentId}`)
      .send({ status: 'CANCELADO' })
      .expect(200);
  });
});
