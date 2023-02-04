import { Schema, model } from 'mongoose';

const userCollection = 'users';

const userSchema = new Schema({
  first_name: { type: String, index: true },
  last_name: String,
  email: String,
  gender: String
})

const userModel = model(userCollection, userSchema);

export default userModel;