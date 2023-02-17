const { Router } = require('express');
const PaymentsController = require('../controllers/paymentsController.js')

const paymentsRouter = Router();

paymentsRouter
  .post('/payments', PaymentsController.create)

module.exports = paymentsRouter;
