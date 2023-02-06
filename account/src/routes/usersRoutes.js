import express from 'express';
import usersController from '../controllers/usersController.js';

const router = express.Router();

const path = '/users';
const pathId = '/users/:id';
const pathAdmin = '/admin/users/:id'

router
    .get(path, usersController.getAllUsers)
    .get(`${path}/search`, usersController.getUserByName)
    .get(pathId, usersController.getUserById)
    .post(`/admin${path}`, usersController.createUser)
    .put(pathAdmin , usersController.updateUser)
    .patch(pathAdmin, usersController.activateDeactivateUser)
    .delete(pathAdmin, usersController.deleteUserById)

export default router;
