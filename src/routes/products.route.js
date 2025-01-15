import { Router } from "express";
import {
    findAll,
    create,
    findById,
    update,
    erease,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", findAll);
router.get("/:id", findById);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", erease);

export default router;
