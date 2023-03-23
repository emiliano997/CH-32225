import { Router } from "express";
import {
  addProduct,
  createBusiness,
  getBusiness,
  getBusinessById,
} from "../controllers/business.controller.js";

const router = Router();

router.get("/", getBusiness);
router.post("/", createBusiness);

router.get("/:id", getBusinessById);
router.put("/:id/products", addProduct);

export default router;
