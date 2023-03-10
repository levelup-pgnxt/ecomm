/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import AccountController from '../controller/accountController.js';
import { middlewareLocal, middlewareBearer } from '../authentication/middlewaresAuthentication.js';

const router = express.Router();

router
  .get('/api/admin/accounts', middlewareBearer, AccountController.listarAccounts)
  .get('/api/admin/accounts/:id', AccountController.listarAccountPorId)
  .post('/api/admin/accounts', AccountController.criarAccount)
  .post('/api/accounts/login', middlewareLocal, AccountController.login)
  .put('/api/admin/accounts/:id', middlewareBearer, AccountController.atualizarAccount)
  .delete('/api/admin/accounts/:id', middlewareBearer, AccountController.excluirAccount);

export default router;
