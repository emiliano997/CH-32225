import { Router } from "express";
import {
  createOrder,
  getOrderById,
  getOrders,
  resolveOrder,
} from "../controllers/orders.controller.js";

const router = Router();

router.get("/", getOrders);
router.post("/", createOrder);

router.get("/:id", getOrderById);
router.put("/:id", resolveOrder);

export default router;
