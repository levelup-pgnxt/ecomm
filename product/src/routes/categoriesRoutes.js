import express from "express";
import categoriesController from "../controllers/categoriesController.js";

const router = express.Router();

router
  .get("/api/categories", categoriesController.listarCategories)
  .get("/api/categories/:id", categoriesController.listarCategoriesPorId)
  .post("/api/admin/categories", categoriesController.inserirCategories)
  .put("/api/admin/categories/:id", categoriesController.atualizarCategories)
  .delete("/api/admin/categories/:id", categoriesController.excluirCategories)
  .patch("/api/admin/categories/:id", categoriesController.ativarCategories)

export default router;  