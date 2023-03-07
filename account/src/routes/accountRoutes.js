import express from 'express';
import AccountsController from '../controllers/accountController.js';

const router = express.Router();

router
  .get('/api/accounts', AccountsController.listarAccounts)
  .get('/api/accounts/:id', AccountsController.listarAccountsPorId)
  .post('/api/admin/accounts', AccountsController.inserirAccounts)
  .put('/api/admin/accounts/:id', AccountsController.atualizarAccounts)
  .delete('/api/admin/accounts/:id', AccountsController.excluirAccounts);
//   .patch('/api/admin/accounts/:id', AccountsController.ativarAccounts);

export default router;
