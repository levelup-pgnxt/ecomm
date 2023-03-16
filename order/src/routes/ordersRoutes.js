import express from 'express';
import OrderController from '../controller/orderController.js';
import middlewareBearer from '../authentication/middlewaresAuthentication.js';

const router = express.Router();

router
  .post('/api/order', middlewareBearer, OrderController.criarOrder)
  .patch('/api/order/:id', middlewareBearer, OrderController.confirmaOrder);

export default router;
