const { Router } = require('express')
const PaymentsController = require('../controller/PaymentController.js')

const router = Router()

router
    .get('/admin/payments', PaymentsController.pegaTodosOsPayments)
    .get('/admin/payments/:id', PaymentsController.pegaUmPayment)
    .post('/admin/payments', PaymentsController.criaPayment)
    .patch('/admin/payments/:id/confirmado', PaymentsController.confirmaPayment)
    .patch('/admin/payments/:id/cancelado', PaymentsController.cancelaPayment)

module.exports = router