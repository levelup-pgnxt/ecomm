const { Router } = require('express');
const PaymentController = require('../controllers/PaymentController');

const router = Router();

router
  .post('/payments', PaymentController.createPayment)
  .get('/payments/:id', PaymentController.getPaymentById)
  .patch('/payments/:id/confirmed', PaymentController.confirmPayment)
  .patch('/payments/:id/canceled', PaymentController.cancelPayment);

module.exports = router;
