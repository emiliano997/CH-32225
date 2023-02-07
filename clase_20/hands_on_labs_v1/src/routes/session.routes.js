import { Router } from "express";
import { userModel } from '../models/user.model.js'

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await userModel.findOne({ email, password });
    if (!user) {
      req.flash('error', 'Invalid credentials')
      return res.status(400).redirect('/login')
    }
    delete user.password;
    req.session.user = user;
    console.log(user)
    req.flash('success', 'Sesion iniciada')
    res.status(200).redirect('/profile');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

router.post("/register", async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    age,
    password,
  } = req.body

  if(!first_name || !last_name || !email || !age || !password) {
    req.flash('error', 'Missing fields')
    return res.status(400).redirect('/register');
  }

  try {
    const user = await userModel.create({
      first_name,
      last_name,
      email,
      age,
      password,
    })
    req.flash('success', 'User created successfully')
    res.status(201).redirect('/');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect('/');
})

export default router;