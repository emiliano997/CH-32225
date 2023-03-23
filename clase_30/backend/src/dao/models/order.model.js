import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  number: Number,
  business: {
    type: Schema.Types.ObjectId,
    ref: "business",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  products: [],
  totalPrice: Number,
  status: String,
})

const orderModel = model('order', orderSchema);
export default orderModel;