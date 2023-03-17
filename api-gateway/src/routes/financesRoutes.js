import dotenv from 'dotenv';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import middlewareBearer from '../authentication/middlewaresAuthentication.js';

dotenv.config();

const host = process.env.FINANCE_HOST;
const port = process.env.FINANCE_PORT;

const financeProxy = createProxyMiddleware({
  target: `http://${host}:${port}`,
  changeOrigin: true,
});

const financeRoutes = express.Router();

financeRoutes
  .get('/admin/payments', middlewareBearer, financeProxy)
  .get('/admin/payments/:id', middlewareBearer, financeProxy)
  .post('/payments', middlewareBearer, financeProxy)
  .patch('/admin/payments/:id', middlewareBearer, financeProxy);

export default financeRoutes;
