const { Router } = require('express')
const PaymentsController = require('../controller/PaymentController.js')

const router = Router()

router
    .get('/admin/payments', PaymentsController.pegaTodosOsPayments)
    .get('/admin/payments/:id', PaymentsController.pegaUmPayment)
    .post('/payments', PaymentsController.criaPayment)
    .patch('/admin/payments/:id', PaymentsController.atualizaStatus)
    
module.exports = router