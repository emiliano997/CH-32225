import userServices from "../services/user.services.js";

class UserValidator {
  async getUsers() {
    try {
      const users = await userServices.find();
      return users;
    } catch (error) {
      console.log(error.message);
    }
  }

  async createUser(name, email, password) {
    try {
      if (!name) throw new Error("Name is required");
      if (!email) throw new Error("Email is required");
      if (!password) throw new Error("Password is required");

      const user = await userServices.create(name, email, password);
      return user;
    } catch (error) {
      return error;
    }
  }

  async deleteUser(id) {
    try {
      if (!id) throw new Error("Id is required");

      const user = await userServices.delete(id);
      return user;
    } catch (error) {
      return error;
    }
  }
}

export default new UserValidator();
