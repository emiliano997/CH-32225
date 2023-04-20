import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.get("/", usersController.getUsers);

router.get("/:id", usersController.getUser);

router.post("/", usersController.createUser);

router.delete("/:id", usersController.deleteUser);

export default router;
