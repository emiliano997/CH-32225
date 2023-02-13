import { Router } from "express";
import { userModel } from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if(!comparePassword(user, password)) {
      return res.status(401).json({ message: "Invalid password" });
    }

    user["password"] = undefined;
    req.session.user = user;

    res.status(200).redirect("/profile");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/register", async (req, res) => {
  const { first_name, last_name, email, age, password, role } = req.body;
  console.log(req.body)

  if (!first_name || !last_name || !email || !age || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const user = await userModel.create({
      first_name,
      last_name,
      email,
      age,
      password: hashPassword(password),
      role
    });
    res.status(201).redirect("/login");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/restore', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await userModel.findOne({ email });

    if(!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if(comparePassword(user, password)) {
      return res.json({ error: 'Password is the same' });
    }

    user.password = hashPassword(password);
    await user.save();

    res.status(200).json({ message: 'Password updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
})

export default router;