import express from 'express';
import ProdutoController from '../controllers/produtoController.js';

const router = express.Router();

router
  .get('/api/produtos', ProdutoController.listarProdutos)
  .get('/api/produtos/:id', ProdutoController.listarProdutoPorId)
  .post('/api/admin/produtos', ProdutoController.criarProduto)
  .put('/api/admin/produtos/:id', ProdutoController.atualizarProduto)
  .delete('/api/admin/produtos/:id', ProdutoController.excluirProduto);

export default router;
