import express from "express";
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv";

import productsRoute from "./src/routes/products.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

connectDatabase(); // Conectando ao banco de dados
app.use(express.json());
app.use("/", productsRoute);

app.listen(PORT, console.log(`Servidor rodando em http://localhost:${PORT}`));
