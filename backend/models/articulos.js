import { sequelize } from "../data/db.js";
import { DataTypes } from "sequelize";
import CategoriaArticulo from "./categoriasArticulos.js";

const Articulo = sequelize.define(
  "articulos",
  {
    IdArticulo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nombre es requerido",
        },
        len: {
          args: [5, 60],
          msg: "Nombre debe ser tipo caracteres, entre 5 y 60 de longitud",
        },
      },
      unique: {
        args: true,
        msg: "este Nombre ya existe en la tabla!",
      },
    },
    Precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Precio es requerido",
        },
      },
    },
    IdCategoriaArticulo: {
      type: DataTypes.INTEGER,
      references: {
        model: CategoriaArticulo,
        key: "IdCategoriaArticulo",
      },
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Stock es requerido",
        },
      },
    },
    FechaAlta: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Fecha Alta es requerido",
        },
      },
    },
    Activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Activo es requerido",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

CategoriaArticulo.hasMany(Articulo, {
  foreignKey: "IdCategoriaArticulo",
});
Articulo.belongsTo(CategoriaArticulo, {
  foreignKey: "IdCategoriaArticulo",
});

export { Articulo };
