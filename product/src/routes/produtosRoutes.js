import ProdutoController from "../controllers/produtoController.js";
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import documentacao from '../../swagger/product.json' assert {type: "json"};

const router = express.Router()

router
    .get('/api/produtos', ProdutoController.listarProdutos)
    .get('/api/produtos/:id', ProdutoController.listarProdutoPorId)
    .post('/api/admin/produtos', ProdutoController.criarProduto)
    .put('/api/admin/produtos/:id', ProdutoController.atualizarProduto)
    .delete('/api/admin/produtos/:id', ProdutoController.excluirProduto)

    .use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(documentacao))

export default router;