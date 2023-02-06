import CategoriaController from '../controllers/categoriaController.js';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import documentacao from '../../swagger/product.json' assert {type: "json"};

const router = express.Router();

router
    .get("/api/categories", CategoriaController.listarCategorias)
    .get("/api/categories/:id", CategoriaController.listarCategoriaPorId)
    .post("/api/admin/categories", CategoriaController.criarCategoria)
    .put("/api/admin/categories/:id", CategoriaController.atualizarCategoria)
    .delete("/api/admin/categories/:id", CategoriaController.excluirCategoria)
    .patch("/api/admin/categories/:id", CategoriaController.ativaCategoria)

    .use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(documentacao))

export default router;