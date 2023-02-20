import OrderController from "../controller/orderController.js";
import express from "express";

const router = express.Router();

router
    .post('/api/order', OrderController.criarOrder)
    .patch('/api/order/:id', OrderController.confirmaOrder)
export default router;