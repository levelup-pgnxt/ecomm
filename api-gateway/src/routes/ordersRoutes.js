import dotenv from 'dotenv';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import middlewareBearer from '../authentication/middlewaresAuthentication.js';

dotenv.config();

const host = process.env.ORDER_HOST;
const port = process.env.ORDER_PORT;

const ordersProxy = createProxyMiddleware({
  target: `http://${host}:${port}`,
  changeOrigin: true,
});

const orderRoutes = express.Router();

orderRoutes
  .post('/api/order', middlewareBearer, ordersProxy)
  .patch('/api/order/:id', middlewareBearer, ordersProxy);

export default orderRoutes;
