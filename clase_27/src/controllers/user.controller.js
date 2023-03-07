import userValidator from "../validators/user.validator.js";

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userValidator.getUsers();
      res.json(users);
    } catch (error) {
      console.log(error.message);
    }
  }

  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await userValidator.createUser(
        name,
        email,
        password
      );
      res.json(user);
    } catch (error) {
      res.json(error)
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await userValidator.deleteUser(id);
      res.json(user);
    } catch (error) {
      res.json(error)
    }
  }
}

export default new UserController();