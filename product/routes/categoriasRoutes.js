import CategoriaController from '../controllers/categoriaController.js';
import express from 'express';

const router = express.Router();

router
    .get("/api/categories", CategoriaController.listarCategorias)
    .get("/api/categories/:id", CategoriaController.listarCategoriaPorId)
    .post("/api/admin/categories", CategoriaController.criaCategoria)
    .put("/api/admin/categories/:id", CategoriaController.atualizaCategoria)


export default router;