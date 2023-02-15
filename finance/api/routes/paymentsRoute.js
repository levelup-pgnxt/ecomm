const express = require ("express")
const PaymentController = require  ("../controllers/PaymentController")

const router = express.Router();

router.get("/payments/:id", PaymentController.getPaymentById)
router.get("/payments", PaymentController.getPayments)
router.post("/payments", PaymentController.createPayment)
//   .put("/payment/:id", PaymentController.updatePayment)
//   .put("/payment/:id", PaymentController.activatePayment)
//   .delete("/payment/:id", PaymentController.deletePayment)

module.exports = router;   