const { Router } = require('express')
const PaymentsController = require('../controller/PaymentController.js')

const router = Router()

router
    .get('/payments', PaymentsController.pegaTodosOsPayments)
    .post('/payments', PaymentsController.criaPayment)

module.exports = router