/* eslint-disable import/extensions */
import express from 'express';
import passport from 'passport';
import usersController from '../controllers/usersController.js';

const router = express.Router();

const path = '/users';
const pathId = `${path}/:id`;
const pathAdmin = `/admin${path}`;
const pathAdminId = `/admin${path}/:id`;
const pathAdminSearch = `/admin${path}/search`;
const login = `${pathAdmin}/login`;

const passportToken = passport.authenticate('bearer', { session: false });

router
  .get(pathAdmin, passportToken, usersController.getAllUsers)
  .get(pathAdminSearch, passportToken, usersController.getUserByName)
  .get(pathId, usersController.getUserById)
  .post(pathAdmin, usersController.createUser)
  .put(pathAdminId, passportToken, usersController.updateUser)
  .delete(pathAdminId, passportToken, usersController.deleteUserById)
  .post(login, passport.authenticate('local', { session: false }), usersController.login);

export default router;
