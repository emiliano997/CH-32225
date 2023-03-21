import express from "express";
import contactsRouter from './routes/contacts.routes.js'
import mongoose from "mongoose";

const app = express();

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017/contacts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/contacts', contactsRouter);

app.listen(3000, () => console.log('Server running on port 3000'))