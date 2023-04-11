import userModel from "../models/user.model.js";
import { createHash, passwordValidator } from "../utils/hash.js";

const registerUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  console.log(`Registering user: ${first_name} ${last_name}, email: ${email} and pwd: ${password}`);

  if(!first_name || !last_name || !email || !password) {
    return res.status(400).json({ message: 'Missing data' });
  }

  const exists = await userModel.findOne({ email });

  if(exists) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = createHash(password);

  const user = {
    first_name,
    last_name,
    email,
    password: hashedPassword,
  }

  await userModel.create(user);
  res.send({ status: 'Ok', message: 'Registered' });
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({ message: 'Missing data' });
  }

  const user = await userModel.findOne({ email });

  if(!user) return res.status(400).json({ message: 'User not found' });

  const isValid = passwordValidator(user, password);

  if(!isValid) return res.status(400).json({ message: 'Invalid password' });

  res.send({ status: 'Ok', message: 'Logged in' });
}

export { registerUser, loginUser };