import CategoriaController from '../controllers/categoriaController.js';
import express from 'express';

const router = express.Router();

router
    .get("/api/categories", CategoriaController.listarCategorias);


export default router;