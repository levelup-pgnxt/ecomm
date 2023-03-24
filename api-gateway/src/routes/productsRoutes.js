import dotenv from 'dotenv';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import middlewareBearer from '../authentication/middlewaresAuthentication.js';

dotenv.config();

const host = process.env.PRODUCT_HOST;
const port = process.env.PRODUCT_PORT;

const productProxy = createProxyMiddleware({
  target: `http://${host}:${port}`,
  changeOrigin: true,
});

const productRoutes = express.Router();

productRoutes
  .get('/api/produtos', productProxy)
  .get('/api/produtos/:id', productProxy)
  .post('/api/admin/produtos', middlewareBearer, productProxy)
  .put('/api/admin/produtos/:id', middlewareBearer, productProxy)
  .delete('/api/admin/produtos/:id', middlewareBearer, productProxy);

export default productRoutes;
