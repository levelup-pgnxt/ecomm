/* eslint-disable import/extensions */
import express from 'express';
import passport from 'passport';
import productsController from '../controllers/productsController.js';

const router = express.Router();
const passportToken = passport.authenticate('bearer', { session: false });

router
  .get('/products', productsController.getAllProducts)
  .get('/products/search', productsController.getProductByName)
  .get('/products/search-by-value', productsController.getProductsByValue)
  .get('/products/search-by-stock', productsController.getProductsByStock)
  .get('/products/search-by-category/:id', productsController.getProductsByCategoryId)
  .get('/products/:id', productsController.getProductById)
  .post('/admin/products', passportToken, productsController.createProduct)
  .put('/admin/products/:id', passportToken, productsController.updateProduct)
  .delete('/admin/products/:id', passportToken, productsController.deleteProductById);

export default router;
