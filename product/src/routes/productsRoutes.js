import express from 'express';
import productsController from '../controllers/productsController.js';

const router = express.Router();

const path = '/products';
const pathSearch = `${path}/search`;
const pathSearchByValue = `${pathSearch}-by-value`;
const pathSearchByStock = `${pathSearch}-by-stock`;
const pathSearchByCategoryId = `${pathSearch}-by-category/:id`;
const pathId = '/products/:id'
const pathAdminProducts = `/admin${path}`
const pathAdminProductsByID = `/admin${pathId}`

router
    .get(path, productsController.getAllProducts)
    .get(pathSearch, productsController.getProductByName)
    .get(pathSearchByValue, productsController.getProductsByValue)
    .get(pathSearchByStock, productsController.getProductsByStock)
    .get(pathSearchByCategoryId, productsController.getProductsByCategoryId)
    .get(pathId, productsController.getProductById)
    .post(pathAdminProducts, productsController.createProduct)
    .put(pathAdminProductsByID, productsController.updateProduct)
    .delete(pathAdminProductsByID, productsController.deleteProductById)

export default router;
