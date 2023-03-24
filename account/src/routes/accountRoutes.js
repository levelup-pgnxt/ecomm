/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import AccountController from '../controller/accountController.js';
import middlewareLocal from '../authentication/middlewaresAuthentication.js';

const router = express.Router();

router
  .get('/api/admin/accounts', AccountController.listarAccounts)
  .get('/api/admin/accounts/:id', AccountController.listarAccountPorId)
  .post('/api/admin/accounts', AccountController.criarAccount)
  .post('/api/accounts/login', middlewareLocal, AccountController.login)
  .get('/api/accounts/logout', AccountController.logout)
  .put('/api/admin/accounts/:id', AccountController.atualizarAccount)
  .delete('/api/admin/accounts/:id', AccountController.excluirAccount);

export default router;
