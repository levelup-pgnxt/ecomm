const { Router } = require('express');
const PaymentController = require('../controllers/PaymentController');

const router = Router();

router
    .post('/payments', PaymentController.createPayment)
    .get('/payments/:id', PaymentController.getPaymentById)
    .patch('/payments/:id/confirmed', PaymentController.paymentConfirmed)
    .patch('/payments/:id/canceled', PaymentController.paymentCanceled)

module.exports = router;
