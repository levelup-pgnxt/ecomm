const { Router } = require('express');
const PaymentsController = require('../controller/PaymentController.js');
const middlewareBearer = require('../authentication/middlewaresAuthentication.js');

const router = Router();

router
  .get('/admin/payments', middlewareBearer, PaymentsController.pegaTodosOsPayments)
  .get('/admin/payments/:id', middlewareBearer, PaymentsController.pegaUmPayment)
  .post('/payments', middlewareBearer, PaymentsController.criaPayment)
  .patch('/admin/payments/:id', middlewareBearer, PaymentsController.atualizaStatus);

module.exports = router;
