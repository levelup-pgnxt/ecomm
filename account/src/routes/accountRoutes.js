import express from 'express';
import AccountController from '../controller/accountController.js';

const router = express.Router();

router
  .get('/api/admin/accounts', AccountController.listarAccounts)
  .get('/api/admin/accounts/:id', AccountController.listarAccountPorId)
  .post('/api/admin/accounts', AccountController.criarAccount)
  .put('/api/admin/accounts/:id', AccountController.atualizarAccount)
  .delete('/api/admin/accounts/:id', AccountController.excluirAccount);

export default router;
