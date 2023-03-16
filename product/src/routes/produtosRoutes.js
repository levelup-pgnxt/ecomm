import express from 'express';
import ProdutoController from '../controllers/produtoController.js';
import middlewareBearer from '../authentication/middlewaresAuthentication.js';

const router = express.Router();

router
  .get('/api/produtos', ProdutoController.listarProdutos)
  .get('/api/produtos/:id', ProdutoController.listarProdutoPorId)
  .post('/api/admin/produtos', middlewareBearer, ProdutoController.criarProduto)
  .put('/api/admin/produtos/:id', middlewareBearer, ProdutoController.atualizarProduto)
  .delete('/api/admin/produtos/:id', middlewareBearer, ProdutoController.excluirProduto);

export default router;
