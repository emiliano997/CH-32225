import mongoose from "mongoose";
import userModel from "./models/user.js";

const environment = async () => {
  await mongoose.connect('mongodb://localhost:27017/coderhouse')
  console.log('Connected to MongoDB')

  // Pagination
  const result = await userModel.paginate({}, { page: 5, limit: 5 })
  console.log(result) 
}

environment()