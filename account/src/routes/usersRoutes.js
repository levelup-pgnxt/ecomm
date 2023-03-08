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

router
  .get(pathAdmin, usersController.getAllUsers)
  .get(pathAdminSearch, usersController.getUserByName)
  .get(pathId, usersController.getUserById)
  .post(pathAdmin, usersController.createUser)
  .put(pathAdminId, usersController.updateUser)
  .delete(pathAdminId, usersController.deleteUserById)
  .post(login, passport.authenticate('local', { session: false }), usersController.login);

export default router;
