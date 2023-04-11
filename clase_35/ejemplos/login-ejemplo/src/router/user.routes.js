import { registerUser, loginUser } from "../controllers/session.controller.js";
import { Router } from "express";
import { faker } from "@faker-js/faker";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// This is a test route to generate fake users
router.get("/test/user", (req, res) => { 
  const first_name = faker.name.firstName()
  const last_name = faker.name.lastName()
  const email = faker.internet.email()
  const password = faker.internet.password()

  res.send({
    first_name,
    last_name,
    email,
    password
  }); 
});

export default router;