import { Router } from "express";
import {
    findAll,
    create,
    findById,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", findAll);
router.get("/:id", findById);
router.post("/", create);

export default router;
