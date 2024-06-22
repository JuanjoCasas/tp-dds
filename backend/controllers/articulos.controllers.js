import { Articulo } from "../models/articulos.js";

const getArticulos = async (req, res) => {
  try {
    const articulos = await Articulo.findAll();
    res.json(articulos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const articulo = await Articulo.findOne({ where: { id } });
    if (!articulo) {
      return res.status(404).json({ message: "Artículo no encontrado" });
    }
    res.json(articulo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Articulo.update(req.body, {
      where: { id },
    });
    if (!updated) {
      return res.status(404).json({ message: "Artículo no encontrado" });
    }
    const updatedArticulo = await Articulo.findOne({ where: { id } });
    res.json(updatedArticulo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Articulo.destroy({
      where: { id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Artículo no encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { getArticulos, getArticulo, updateArticulo, deleteArticulo };
