/* eslint-disable import/extensions */
import express from 'express';
import passport from 'passport';
import categoriesController from '../controllers/categoriesController.js';

const router = express.Router();
const passportToken = passport.authenticate('bearer', { session: false });

const path = '/categories';
const pathId = `${path}/:id`;
const pathAdminId = `/admin${path}/:id`;
const pathAdmin = `/admin${path}`;
const pathSearch = `${path}/search`;

router
  .get(path, passportToken, categoriesController.getAllCategories)
  .get(pathSearch, passportToken, categoriesController.getCategoryByName)
  .get(pathId, passportToken, categoriesController.getCategoryById)
  .post(pathAdmin, passportToken, categoriesController.createCategory)
  .put(pathAdminId, passportToken, categoriesController.updateCategory)
  .patch(pathAdminId, passportToken, categoriesController.changeStatusCategory)
  .delete(pathAdminId, passportToken, categoriesController.deleteCategoryById);

export default router;
