const express = require("express");
const cors = require("cors");
const sequelize = require("./data/db");

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api");

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
