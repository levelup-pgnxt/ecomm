const { Router } = require('express')
const PaymentsController = require('../controller/PaymentController.js')

const router = Router()

router
    .get('/payments', PaymentsController.pegaTodosOsPayments)
    .get('/payments/:id', PaymentsController.pegaUmPayment)
    .post('/payments', PaymentsController.criaPayment)

module.exports = router