import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
})

export default model('contact', contactSchema);