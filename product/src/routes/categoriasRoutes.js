import express from 'express';
import CategoriaController from '../controllers/categoriaController.js';
import middlewareBearer from '../authentication/middlewaresAuthentication.js';

const router = express.Router();

router
  .get('/api/categories', CategoriaController.listarCategorias)
  .get('/api/categories/:id', CategoriaController.listarCategoriaPorId)
  .post('/api/admin/categories', middlewareBearer, CategoriaController.criarCategoria)
  .put('/api/admin/categories/:id', middlewareBearer, CategoriaController.atualizarCategoria)
  .delete('/api/admin/categories/:id', middlewareBearer, CategoriaController.excluirCategoria)
  .patch('/api/admin/categories/:id', middlewareBearer, CategoriaController.ativaCategoria);

export default router;
