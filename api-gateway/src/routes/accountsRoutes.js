import dotenv from 'dotenv';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import middlewareBearer from '../authentication/middlewaresAuthentication.js';

dotenv.config();

const host = process.env.ACCOUNT_HOST;
const port = process.env.ACCOUNT_PORT;

const accountProxy = createProxyMiddleware({
  target: `http://${host}:${port}`,
  changeOrigin: true,
});

const accountRoutes = express.Router();

accountRoutes
  .get('/api/admin/accounts', middlewareBearer, accountProxy)
  .get('/api/admin/accounts/:id', accountProxy)
  .post('/api/admin/accounts', accountProxy)
  .post('/api/accounts/login', accountProxy)
  .get('/api/accounts/logout', middlewareBearer, accountProxy)
  .put('/api/admin/accounts/:id', middlewareBearer, accountProxy)
  .delete('/api/admin/accounts/:id', middlewareBearer, accountProxy);

export default accountRoutes;
