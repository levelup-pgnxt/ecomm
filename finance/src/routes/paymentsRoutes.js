const { Router } = require('express');
const PaymentsController = require('../controllers/paymentsController.js')

const paymentsRouter = Router();

paymentsRouter
  .post('/payments', PaymentsController.create)
  .get('/payments/:id', PaymentsController.getById)
  .put('/payments/:id', PaymentsController.updateStatus)

module.exports = paymentsRouter;
