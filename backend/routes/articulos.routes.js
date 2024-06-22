import express from "express";
import {
  getArticulos,
  getArticulo,
  updateArticulo,
  deleteArticulo,
} from "../controllers/articulos.controllers.js";

const router = express.Router();

router.get("/", getArticulos);
router.get("/:id", getArticulo);
router.put("/:id", updateArticulo);
router.delete("/:id", deleteArticulo);

export default router;
