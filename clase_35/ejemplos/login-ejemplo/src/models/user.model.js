import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
});

export default model('User', userSchema);