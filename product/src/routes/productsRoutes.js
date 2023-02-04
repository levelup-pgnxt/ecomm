import express from 'express';
import productsController from '../controllers/productsController.js';

const router = express.Router();

const path = '/products';
const pathId = '/products/:id'
const pathAdmin = '/admin/products/:id'

router
    .get(path, productsController.getAllProducts)
    .get(`${path}/search`, productsController.getProductByName)
    .get(pathId, productsController.getProductById)
    .post(`/admin${path}`, productsController.createProduct)
    .put(pathAdmin, productsController.updateProduct)
    // .patch(pathAdmin, productsController.activateDeactivateProduct)
    .delete(pathAdmin, productsController.deleteProductById)

export default router;
