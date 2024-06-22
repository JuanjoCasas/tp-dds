import express from "express";
import cors from "cors";
import { sequelize } from "./data/db.js";
import articulosRoutes from "./routes/articulos.routes.js";
import categoriasArticulosRoutes from "./routes/categoriasArticulos.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/articulos", articulosRoutes);
app.use("/api/categoriasarticulos", categoriasArticulosRoutes);

app.get("/", (req, res) => {
  res.send("Backend de la tienda");
});

sequelize
  .sync()
  .then(() => {
    console.log("Conexión con la base de datos establecida exitosamente.");
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });
