import express from 'express';
import CategoriaController from '../controllers/categoriaController.js';

const router = express.Router();

router
  .get('/api/categories', CategoriaController.listarCategorias)
  .get('/api/categories/:id', CategoriaController.listarCategoriaPorId)
  .post('/api/admin/categories', CategoriaController.criarCategoria)
  .put('/api/admin/categories/:id', CategoriaController.atualizarCategoria)
  .delete('/api/admin/categories/:id', CategoriaController.excluirCategoria)
  .patch('/api/admin/categories/:id', CategoriaController.ativaCategoria);

export default router;
