import express from 'express';
import categoriesController from '../controllers/categoriesController.js';

const router = express.Router();

const path = '/categories';
const pathId = '/categories/:id'

router
    .get(path, categoriesController.getAllCategories)
    .get(`${path}/search`, categoriesController.getCategoryByName)
    .get(pathId, categoriesController.getCategoryById)
    .post(path, categoriesController.createCategory)
    .put(pathId, categoriesController.updateCategory)
    .patch(pathId, categoriesController.activateDeactivateCategory)
    .delete(pathId, categoriesController.deleteCategoryById)

export default router;
