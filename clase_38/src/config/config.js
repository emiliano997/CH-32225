import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce',
  JWT_SECRET: process.env.JWT_SECRET || secret,
  MAIL_HOST: process.env.MAIL_HOST || 'smtp.ethereal.email',
  MAIL_PORT: process.env.MAIL_PORT || 587,
  MAIL_USER: process.env.MAIL_USER || '',
  MAIL_PASS: process.env.MAIL_PASS || '',
  MAIL_FROM: process.env.MAIL_FROM || ''
}