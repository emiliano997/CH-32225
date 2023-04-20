import { Router } from "express";
import passport from "passport";
import productsController from "../controllers/products.controller.js";

const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  productsController.getProducts
);

router.get("/:id", productsController.getProduct);

router.post("/", productsController.createProduct);

router.put("/:id", productsController.updateProduct);

router.delete("/:id", productsController.deleteProduct);

export default router;
