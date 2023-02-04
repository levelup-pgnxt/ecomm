import express from 'express';
import productsController from '../controllers/productsController.js';

const router = express.Router();

const path = '/products';
const pathId = '/products/:id'

router
    .get(path, productsController.getAllProducts)
    .get(`${path}/search`, productsController.getProductByName)
    .get(pathId, productsController.getProductById)
    .post(path, productsController.createProduct)
    .put(pathId, productsController.updateProduct)
    .patch(pathId, productsController.activateDeactivateProduct)
    .delete(pathId, productsController.deleteProductById)

export default router;
