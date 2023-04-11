import express from "express";
import userRoutes from "./router/user.routes.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/ch32225", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.use("/", userRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
