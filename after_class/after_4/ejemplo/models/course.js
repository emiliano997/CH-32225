import { Schema, model } from 'mongoose';

const courseCollection = 'courses';

const courseSchema = new Schema({
  title: String,
  description: String,
  difficulty: Number,
  topics: {
    type: Array,
    default: []
  },
  professor: String,
  students: {
    type: Array,
    default: []
  }
})

const courseModel = model(courseCollection, courseSchema);

export default courseModel;