const { Router } = require('express');
const passport = require('passport');
const PaymentsController = require('../controller/PaymentController.js');

const router = Router();
const bearerAuthenticate = passport.authenticate('bearer', { session: false });

router
  .get('/admin/payments', bearerAuthenticate, PaymentsController.pegaTodosOsPayments)
  .get('/admin/payments/:id', bearerAuthenticate, PaymentsController.pegaUmPayment)
  .post('/payments', bearerAuthenticate, PaymentsController.criaPayment)
  .patch('/admin/payments/:id', bearerAuthenticate, PaymentsController.atualizaStatus);

module.exports = router;
