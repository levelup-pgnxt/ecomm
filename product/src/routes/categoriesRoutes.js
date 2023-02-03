import express from 'express';
import categoriesController from '../controllers/categoriesController.js';

const router = express.Router();

const path = '/categories';
const pathId = '/categories/:id'

router
    .get(path, categoriesController.getAllCategories)
    // .get(pathId, authorController.getAuthorById)
    .post(path, categoriesController.createCategory)
    // .put(pathId, authorController.updateAuthor)
    // .delete(pathId, authorController.deleteAuthorById)

export default router;
