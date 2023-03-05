const request = require('supertest');
const { describe, expect, it, jest } = require('@jest/globals');

const DATATEST = require('./datatests/datatests');
const STATUS = require('../src/auxiliaries/constant');
const app = require('../src/app');

jest.useRealTimers();

let ID;

let server;
beforeEach(() => {
  const PORT = 3002;
  server = app.listen(PORT, () => console.log(
    `Servidor está rodando em http://localhost:${PORT}`,
  ));
});

afterEach(() => {
  server.close();
});

describe('PAYMENTS ROUTES', () => {
  describe('POST /payments', () => {
    it('must register a new payment', async () => {
      // jest.useFakeTimers('legacy');
      jest.setTimeout(10 * 1000);
      const response = await request(app)
        .post('/payments')
        .send({ ...DATATEST[0], status: STATUS[0] });

      console.log(response);

      const newPayment = response.body;
      ID = newPayment.id;

      expect(response.status).toEqual(201);
      expect(newPayment).toBeInstanceOf(Object);
      expect(newPayment).toHaveProperty('value');
      expect(newPayment).toHaveProperty('name');
      expect(newPayment).toHaveProperty('number');
      expect(newPayment).toHaveProperty('expiration');
      expect(newPayment).toHaveProperty('cvv');
      expect(newPayment).toHaveProperty('status');
      expect(newPayment.status).toEqual(DATATEST[0]);
    }, 30000);
  });
});
