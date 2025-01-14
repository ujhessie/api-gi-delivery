import express from "express";

import productsRoute from "./src/routes/products.route.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/", productsRoute);

app.listen(PORT, console.log(`Servidor rodando em http://localhost:${PORT}`));
