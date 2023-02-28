import { Schema, model } from 'mongoose';

const userCollection = 'users';

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user', enum: ['user', 'admin'] },
})

export const userModel = model(userCollection, userSchema);