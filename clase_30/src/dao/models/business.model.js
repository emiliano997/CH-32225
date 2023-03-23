import { Schema, model } from 'mongoose';

const businessSchema = new Schema({
  name: String,
  products: []
})

const businessModel = model('business', businessSchema);
export default businessModel;