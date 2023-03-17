/* eslint-disable import/extensions */
import express from 'express';
import passport from 'passport';
import usersController from '../controllers/usersController.js';

const router = express.Router();

const passportToken = passport.authenticate('bearer', { session: false });
const passportLogin = passport.authenticate('local', { session: false });

router
  .get('/admin/users', passportToken, usersController.getAllUsers)
  .get('/admin/users/search', passportToken, usersController.getUserByName)
  .get('/users/:id', usersController.getUserById)
  .post('/admin/users', usersController.createUser)
  .put('/admin/users/:id', passportToken, usersController.updateUser)
  .delete('/admin/users/:id', passportToken, usersController.deleteUserById)
  .post('/admin/users/login', passportLogin, usersController.login);

export default router;
