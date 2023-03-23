import userModel from '../models/user.model.js';

export default class User {
  getUsers = async () => {
    try {
      const users = await userModel.find();
      return users;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getUserById = async (id) => {
    try {
      const user = await userModel.findOne({ _id: id });
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  createUser = async (user) => {
    try {
      const newUser = await userModel.create(user);
      return newUser;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  updateUser = async (id, user) => {
    try {
      const userDB = await userModel.findByIdAndUpdate({ _id: id }, { $set: user });
      return userDB;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}