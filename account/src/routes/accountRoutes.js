import express from 'express';
import AccountsController from '../controllers/accountController.js';
import '../security/estrategiaAutenticacao.js';
import { localMiddlewareAut, bearerMiddlewareAut } from '../security/middlewareAutenticacaoUser.js';

const router = express.Router();

router
  .get('/api/accounts', bearerMiddlewareAut, AccountsController.listarAccounts)
  .get('/api/accounts/:id', AccountsController.listarAccountPorId)
  .post('/api/admin/accounts', AccountsController.inserirAccount)
  .put('/api/admin/accounts/:id', bearerMiddlewareAut, AccountsController.atualizarAccount)
  .delete('/api/admin/accounts/:id', bearerMiddlewareAut, AccountsController.excluirAccount)
  .post('/api/accounts/login', localMiddlewareAut, AccountsController.logarAccount);

export default router;
