import { Router } from "express";
import sessionController from "../controllers/session.controller.js";

const router = Router();

router.post('/login', sessionController.login)

export default router;