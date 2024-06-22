import { sequelize } from "../data/db.js";
import { DataTypes } from "sequelize";

const CategoriaArticulo = sequelize.define(
  "categoriasarticulos",
  {
    IdCategoriaArticulo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nombre es requerido",
        },
        len: {
          args: [5, 30],
          msg: "Nombre debe ser tipo caracteres, entre 5 y 30 de longitud",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

export default CategoriaArticulo;
