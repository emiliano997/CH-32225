import usersDao from "../daos/dbManager/users.dao.js";
import { comparePassword } from "../utils.js";
import jwt from "jsonwebtoken";

class SessionController {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email y password son requeridos" });
    }

    const user = await usersDao.getByEmail(email);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (!comparePassword(user, password)) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Sacar password
    const token = jwt.sign(
      { email, password, role: user.role },
      "coderSecret",
      { expiresIn: "10m" }
    );
    res.cookie("coderCokieToken", token, { maxAge: 5000, httpOnly: false });
    res.json({ message: "Login correcto", token });
  }
}

export default new SessionController();
