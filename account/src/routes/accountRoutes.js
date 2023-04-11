import express from 'express';
import AccountsController from '../controllers/accountController.js';
import '../security/estrategiaAutenticacao.js';
import { localMiddlewareAut, bearerMiddlewareAut } from '../security/middlewareAutenticacaoUser.js';

const router = express.Router();

router
  .get('/api/accounts', bearerMiddlewareAut, AccountsController.listarAccounts)
  .get('/api/accounts/:id', AccountsController.listarAccountsPorId)
  .post('/api/admin/accounts', AccountsController.inserirAccounts)
  .put('/api/admin/accounts/:id', bearerMiddlewareAut, AccountsController.atualizarAccounts)
  .delete('/api/admin/accounts/:id', bearerMiddlewareAut, AccountsController.excluirAccounts)
  .post('/api/accounts/login', localMiddlewareAut, AccountsController.logarAccounts);

export default router;
