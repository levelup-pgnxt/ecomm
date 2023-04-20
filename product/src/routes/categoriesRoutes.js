/* eslint-disable import/extensions */
import express from 'express';
import passport from 'passport';
import categoriesController from '../controllers/categoriesController.js';

const router = express.Router();
const passportToken = passport.authenticate('bearer', { session: false });

router
  .get('/categories', categoriesController.getAllCategories)
  .get('/categories/search', categoriesController.getCategoryByName)
  .get('/categories/:id', categoriesController.getCategoryById)
  .post('/admin/categories', passportToken, categoriesController.createCategory)
  .put('/admin/categories/:id', passportToken, categoriesController.updateCategory)
  .patch('/admin/categories/:id', passportToken, categoriesController.changeStatusCategory)
  .delete('/admin/categories/:id', passportToken, categoriesController.deleteCategoryById);

export default router;
