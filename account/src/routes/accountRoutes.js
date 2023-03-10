/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import passport from 'passport';
import AccountController from '../controller/accountController.js';

const router = express.Router();

router
  .get('/api/admin/accounts', passport.authenticate('bearer', { session: false }), AccountController.listarAccounts)
  .get('/api/admin/accounts/:id', AccountController.listarAccountPorId)
  .post('/api/admin/accounts', AccountController.criarAccount)
  .post('/api/accounts/login', passport.authenticate('local', { session: false }), AccountController.login)
  .put('/api/admin/accounts/:id', passport.authenticate('bearer', { session: false }), AccountController.atualizarAccount)
  .delete('/api/admin/accounts/:id', passport.authenticate('bearer', { session: false }), AccountController.excluirAccount);

export default router;
