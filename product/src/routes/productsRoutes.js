import express from 'express';
import productsController from '../controllers/productsController.js';

const router = express.Router();

const path = '/products';
const pathSearch = '/products/search';
const pathId = '/products/:id'
const pathAdmin = '/admin/products/:id'

router
    .get(path, productsController.getAllProducts)
    .get(pathSearch, productsController.getProductByName)
    .get(`${pathSearch}-by-value`, productsController.getProductsByValue)
    .get(`${pathSearch}-by-stock`, productsController.getProductsByStock)
    .get(`${pathSearch}-by-category/:id`, productsController.getProductsByCategoryId)
    .get(pathId, productsController.getProductById)
    .post(`/admin${path}`, productsController.createProduct)
    .put(pathAdmin, productsController.updateProduct)
    // .patch(pathAdmin, productsController.activateDeactivateProduct)
    .delete(pathAdmin, productsController.deleteProductById)

export default router;
