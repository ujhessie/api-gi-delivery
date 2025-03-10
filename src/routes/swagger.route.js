import { Router } from "express";
const router = Router();

// Importando a iterface de usuário do Swagger (UI)
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerDocument));


export default router
