import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.get("/", usersController.getUsers);

router.get("/:id", usersController.getUser);

router.post("/", usersController.createUser);

router.delete("/:id", usersController.deleteUser);

// router.get('/recuperara-contraseña/:id', usersController.recuperarContraseña);
// router.post('/restablecer-contraseña/', usersController.restablecerContraseña);

export default router;
