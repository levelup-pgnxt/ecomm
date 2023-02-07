//o que vai acontecer a cada rota
import express from "express";
import CategoryController from "../controllers/categoryController.js";

const router = express.Router();

router
    .get("/categories", CategoryController.listCategories)
    .get("/categories/:id", CategoryController.listCategoryById)
    .post("/categories", CategoryController.insertCategory)
    .put("/categories/:id", CategoryController.updateCategory)
    .patch("/categories/:id", CategoryController.activateCategory)
    .delete("/categories/:id", CategoryController.deleteCategory)

export default router;
