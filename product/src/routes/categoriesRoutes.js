import express from 'express';
import categoriesController from '../controllers/categoriesController.js';

const router = express.Router();

const path = '/categories';
const pathId = '/categories/:id';
const pathAdmin = '/admin/categories/:id'

router
    .get(path, categoriesController.getAllCategories)
    .get(`${path}/search`, categoriesController.getCategoryByName)
    .get(pathId, categoriesController.getCategoryById)
    .post(`/admin${path}`, categoriesController.createCategory)
    .put(pathAdmin , categoriesController.updateCategory)
    .patch(pathAdmin, categoriesController.activateDeactivateCategory)
    .delete(pathAdmin, categoriesController.deleteCategoryById)

export default router;
