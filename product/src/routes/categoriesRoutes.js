import express from 'express';
import categoriesController from '../controllers/categoriesController.js';

const router = express.Router();

const path = '/categories';
const pathId = `${path}/:id`;
const pathAdminId = `/admin${path}/:id`;
const pathAdmin = `/admin${path}`;
const pathSearch = `${path}/search`

router
    .get(path, categoriesController.getAllCategories)
    .get(pathSearch, categoriesController.getCategoryByName)
    .get(pathId, categoriesController.getCategoryById)
    .post(pathAdmin, categoriesController.createCategory)
    .put(pathAdminId , categoriesController.updateCategory)
    .patch(pathAdminId, categoriesController.activateDeactivateCategory)
    .delete(pathAdminId, categoriesController.deleteCategoryById)

export default router;
