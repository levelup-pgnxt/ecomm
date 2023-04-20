const { Router } = require('express');
const passport = require('passport');
const PaymentController = require('../controllers/PaymentController');

const router = Router();
const passportToken = passport.authenticate('bearer', { session: false });

router
  .post('/payments', passportToken, PaymentController.createPayment)
  .get('/payments/:id', passportToken, PaymentController.getPaymentById)
  .patch('/payments/:id/confirmed', passportToken, PaymentController.confirmPayment)
  .patch('/payments/:id/canceled', passportToken, PaymentController.cancelPayment);

module.exports = router;
