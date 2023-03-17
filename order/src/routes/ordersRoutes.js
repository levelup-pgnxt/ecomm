import express from 'express';
import OrderController from '../controller/orderController.js';

const router = express.Router();

router
  .post('/api/order', OrderController.criarOrder)
  .patch('/api/order/:id', OrderController.confirmaOrder);

export default router;
