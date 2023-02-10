const { Router } = require('express');
const PaymentController = require('../controllers/PaymentController');

const router = Router();

router.post('/payments', PaymentController.createPayment);

module.exports = router;
