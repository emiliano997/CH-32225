import { Router } from "express";
import passport from "passport";
import { userModel } from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils.js";

const router = Router();

router.post("/login", passport.authenticate("login", { failureRedirect: '/failLogin' }) ,async (req, res) => {
  if(!req.user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  req.session.user = {
    first_name: req.user.first_name,
    last_name: req.user.last_name,
    email: req.user.email,
    age: req.user.age,
    role: req.user.role
  }

  res.status(200).redirect('/profile');
});

router.get('/failLogin', (req, res) => {
  res.status(401).json({ message: 'Fail Login' });
})

router.post("/register", passport.authenticate("register", { failureRedirect: '/session/failRegister' }), async (req, res) => {
  return res.status(201).redirect('/login');
});

router.get('/failRegister', (req, res) => {
  res.status(400).json({ message: 'Fail Register' });
})

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