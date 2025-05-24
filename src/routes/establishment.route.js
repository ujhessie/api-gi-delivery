import { Router } from "express";

import {
  createEstablishment,
  findAllEstablishment,
  updateEstablishment,
  findByIdEstablishment,
  ereaseEstablishment
} from "../controllers/establishment.controller.js";


import { validId } from "../middlewares/global.middlewares.js";

const router = Router();

  // router.get("/", findAllEstablishment);
  // router.get("/:id", validId, findByIdEstablishment);
  // router.post("/", createEstablishment);
  // router.patch("/:id", validId, updateEstablishment);
  // router.delete("/:id",validId, ereaseEstablishment)


// router.get("/", findAll);
// router.get("/:id", validId, findById);
// router.post("/", create);
// router.patch("/:id", validId, update);
// router.delete("/:id", validId, erease);

export default router;
