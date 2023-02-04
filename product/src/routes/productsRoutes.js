import express from "express";
import ProductController from "../controllers/productsController.js";

const router = express.Router();

router
  .get("/product", ProductController.listProducts)

export default router;   