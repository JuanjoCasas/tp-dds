import express from "express";
import {
  getCategoriasArticulos,
  getCategoriaArticulo,
  createCategoriaArticulo,
  updateCategoriaArticulo,
  deleteCategoriaArticulo,
} from "../controllers/categoriasArticulos.controllers.js";

const router = express.Router();

router.get("/", getCategoriasArticulos);
router.get("/:id", getCategoriaArticulo);
router.post("/", createCategoriaArticulo);
router.put("/:id", updateCategoriaArticulo);
router.delete("/:id", deleteCategoriaArticulo);

export default router;
