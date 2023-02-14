import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  age: Number
});


export const userModel = model('User', userSchema);