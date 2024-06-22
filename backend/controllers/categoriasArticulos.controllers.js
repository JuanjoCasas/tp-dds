import CategoriaArticulo from "../models/categoriasArticulos.js";

const getCategoriasArticulos = async (req, res) => {
  try {
    const categoriasArticulos = await CategoriaArticulo.findAll();
    res.json(categoriasArticulos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getCategoriaArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const categoriaArticulo = await CategoriaArticulo.findOne({
      where: { IdCategoriaArticulo: id },
    });
    if (!categoriaArticulo) {
      return res
        .status(404)
        .json({ message: "Categoría de artículo no encontrada" });
    }
    res.json(categoriaArticulo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createCategoriaArticulo = async (req, res) => {
  try {
    const nuevaCategoria = await CategoriaArticulo.create(req.body);
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateCategoriaArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await CategoriaArticulo.update(req.body, {
      where: { IdCategoriaArticulo: id },
    });
    if (!updated) {
      return res
        .status(404)
        .json({ message: "Categoría de artículo no encontrada" });
    }
    const updatedCategoriaArticulo = await CategoriaArticulo.findOne({
      where: { IdCategoriaArticulo: id },
    });
    res.json(updatedCategoriaArticulo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCategoriaArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CategoriaArticulo.destroy({
      where: { IdCategoriaArticulo: id },
    });
    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Categoría de artículo no encontrada" });
    }
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export {
  getCategoriasArticulos,
  getCategoriaArticulo,
  createCategoriaArticulo,
  updateCategoriaArticulo,
  deleteCategoriaArticulo,
};
