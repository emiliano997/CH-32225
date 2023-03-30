import { Router } from "express";
import { generateUser } from "../utils.js";

const router = Router();

router.get('/', (req, res) => {
  const users = []

  for (let i = 0; i < 10; i++) {
    users.push(generateUser())
  }

  res.json(users)
})

export default router;