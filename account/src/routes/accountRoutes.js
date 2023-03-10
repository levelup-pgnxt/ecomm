/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import passport from 'passport';
import AccountController from '../controller/accountController.js';

const router = express.Router();
const bearerAuthenticate = passport.authenticate('bearer', { session: false });
const localAuthenticate = passport.authenticate('local', { session: false });

router
  .get('/api/admin/accounts', bearerAuthenticate, AccountController.listarAccounts)
  .get('/api/admin/accounts/:id', AccountController.listarAccountPorId)
  .post('/api/admin/accounts', AccountController.criarAccount)
  .post('/api/accounts/login', localAuthenticate, AccountController.login)
  .put('/api/admin/accounts/:id', bearerAuthenticate, AccountController.atualizarAccount)
  .delete('/api/admin/accounts/:id', bearerAuthenticate, AccountController.excluirAccount);

export default router;
