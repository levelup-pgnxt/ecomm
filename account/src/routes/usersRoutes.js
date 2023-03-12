import express from 'express';
import passport from 'passport';
import UserController from '../controllers/usersController.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router
  .get('/user', UserController.listUsers)
  .get('/user/:id', UserController.listUserById)
  .post('/user', UserController.insertUser)
  .put('/user/:id', UserController.updateUser)
  .delete('/user/:id', UserController.deleteUser)
  .post('/user/login', passport.authenticate('local', { session: false }), UserController.login);

export default router;
