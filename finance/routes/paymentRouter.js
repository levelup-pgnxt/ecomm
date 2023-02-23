const { Router } = require ("express")
const PaymentController = require("../controllers/PaymentController.js")

const router = Router()

router.get('/payments', PaymentController.seeAllPayments)
router.get('/payments/:id', PaymentController.getPaymentById)
router.post('/payments', PaymentController.createPayment)
router.put('/payments/:id', PaymentController.updatePayment)

module.exports = router