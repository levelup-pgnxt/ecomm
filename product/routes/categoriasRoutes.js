import CategoriaController from '../controllers/categoriaController.js';
import express from 'express';

const router = express.Router();

router
    .get("/api/categories", CategoriaController.listarCategorias)
    .post("/api/admin/categories", CategoriaController.criaCategoria)


export default router;