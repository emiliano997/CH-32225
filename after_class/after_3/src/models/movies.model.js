import { Schema, model } from "mongoose";

const movieCollection = "movies";

const movieSchema = new Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  director: { type: String, required: true }
});

export const movieModel = model(movieCollection, movieSchema);