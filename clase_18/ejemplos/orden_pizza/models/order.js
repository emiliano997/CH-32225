import mongoose from 'mongoose';

const orderCollection = 'orders';

const OrderSchema = new mongoose.Schema({
  name: String,
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    default: 'medium'
  },
  price: Number,
  quantity: Number,
  date: Date
});

const model = mongoose.model(orderCollection, OrderSchema);

export default model;