import mongoose from "mongoose";
import courseModel from "./models/course.js";
import studentModel from "./models/student.js";
import userModel from "./models/user.js";

const main = async () => {
  await mongoose.connect()
  mongoose.set('strictQuery', true);

  const res = await userModel.find({ first_name: 'Celia' }).explain('executionStats');
  console.log(res)
} 

const environment = async () => {
  await mongoose.connect()
  mongoose.set('strictQuery', true);

  // await studentModel.create({
  //   first_name: 'Martin',
  //   last_name: 'Milone',
  //   email: 'martin@gmail.com',
  //   gender: 'M',
  // })

  // await courseModel.create({
  //   title: 'Curso de NodeJS',
  //   description: 'Curso de NodeJS',
  //   difficulty: 1,
  //   topics: ['NodeJS', 'MongoDB', 'Express'],
  //   professor: 'Martin Milone',
  //   students: []
  // })

  // Agregar un curso al estudiante
  // const student = await studentModel.findOne({ first_name: 'Martin' });
  // console.log(student.courses);
  // student.courses.push({ course: '63d1c7c3cb76fb0dd617c9a6' })
  // const newStudent = await studentModel.updateOne({ first_name: 'Martin'}, student);
  // console.log(newStudent)

  // Populate
  // const student = await studentModel.findOne({ first_name: 'Martin' }).populate('courses.course').
  // console.log(JSON.stringify(student, null, 2))

  // Populate con Pre
  const student = await studentModel.findOne({ first_name: 'Martin' })
  console.log(JSON.stringify(student, null, 2))


}

// main()
environment()