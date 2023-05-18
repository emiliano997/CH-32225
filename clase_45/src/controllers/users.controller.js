import usersDao from "../daos/dbManager/users.dao.js";
import UserDto from "../daos/dtos/users.dto.js";
import { hashPassword } from "../utils.js";
import sendMail from "../utils/sendMail.js";

class UserController {
  async getUsers(req, res) {
    try {
      const users = await usersDao.getAll();
      res.json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await usersDao.getById(id);
      res.json(user);
    } catch (error) {
      req.logger.error(error.message);
      res.status(400).json({ message: error.message });
    }
  }

  async createUser(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      req.logger.error("All fields are required");
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    try {
      const user = new UserDto({
        username,
        email,
        password: hashPassword(password),
      });

      await sendMail.sendMailSimple(email, "Welcome", user);

      const newUser = await usersDao.create(user);
      res.json(newUser);
    } catch (error) {
      req.logger.error(error.message);
      res.status(400).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await usersDao.getById(req.params.id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      await usersDao.delete(req.params.id);
      res.json({ message: "User deleted" });
    } catch (error) {
      req.logger.error(error.message);
      res.status(400).json({ message: error.message });
    }
  }
}

export default new UserController();
