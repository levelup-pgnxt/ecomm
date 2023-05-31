import express from 'express';
import produtosController from '../controllers/produtosController.js';

const router = express.Router();

router
  .get('/api/produtos', produtosController.listarProdutos)
  .get('/api/produtos/:id', produtosController.listarProdutosPorId)
  .post('/api/admin/produtos', produtosController.inserirProdutos)
  .put('/api/admin/produtos/:id', produtosController.atualizarProdutos)
  .delete('/api/admin/produtos/:id', produtosController.excluirProdutos)
  .patch('/api/admin/produtos/:id', produtosController.zerarProdutos);

export default router;
