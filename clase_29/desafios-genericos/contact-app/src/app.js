import express from "express";
import contactsRouter from './routes/contacts.routes.js'
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/contacts', contactsRouter);

app.listen(3000, () => console.log('Server running on port 3000'))