import { Router } from "express";

const router = Router();
const users = []

router.post('/', (req, res) => {
  
  const { nombre, correo, password } = req.body;
  const user = {
    nombre,
    correo,
    password
  }
  users.push(user);
  console.table(users)
  res.redirect('/success')
})

export default router;