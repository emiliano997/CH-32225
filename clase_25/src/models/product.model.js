import { Schema, model } from 'mongoose';

const productCollection = 'products';

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
})

export const productModel = model(productCollection, productSchema);