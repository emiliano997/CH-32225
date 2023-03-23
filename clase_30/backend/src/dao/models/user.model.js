import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  role: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "orders",
    }
  ]
})

const userModel = model('user', userSchema);
export default userModel;