import dotenv from 'dotenv';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import middlewareBearer from '../authentication/middlewaresAuthentication.js';

dotenv.config();

const host = process.env.PRODUCT_HOST;
const port = process.env.PRODUCT_PORT;

const categorieProxy = createProxyMiddleware({
  target: `http://${host}:${port}`,
  changeOrigin: true,
});

const categoryRoutes = express.Router();

categoryRoutes
  .get('/api/categories', categorieProxy)
  .get('/api/categories/:id', categorieProxy)
  .post('/api/admin/categories', middlewareBearer, categorieProxy)
  .put('/api/admin/categories/:id', middlewareBearer, categorieProxy)
  .delete('/api/admin/categories/:id', middlewareBearer, categorieProxy)
  .patch('/api/admin/categories/:id', middlewareBearer, categorieProxy);

export default categoryRoutes;
