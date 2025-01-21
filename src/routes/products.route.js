import { Router } from "express";
import {
    findAll,
    create,
    findById,
    update,
    erease,
} from "../controllers/products.controller.js";
import { validId } from "../middlewares/global.middlewares.js";

const router = Router();

router.get("/", findAll);
router.get("/:id", validId, findById);
router.post("/", create);
router.patch("/:id", validId, update);
router.delete("/:id", validId, erease);

export default router;
