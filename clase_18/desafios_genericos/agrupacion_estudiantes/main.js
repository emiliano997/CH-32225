import mongoose from "mongoose";
import { studentsData } from './data/student.data.js'
import studentModel from './models/student.js';

const environment = async () => {
  await mongoose.connect('mongodb://localhost:27017/coderhouse')
  console.log('Connected to MongoDB')

  // Insert
  // const result = await studentModel.insertMany(studentsData)
  // console.log(result);

  // Desafio 1
  // const result = await studentModel.aggregate([
  //   {
  //     $group: { _id: "$grade", students: { $push: "$first_name"} }
  //   },
  //   {
  //     $sort: { _id: -1 }
  //   }
  // ])
  // console.log(result)

  // Desafio 2
  // const result = await studentModel.aggregate([
  //   {
  //     $group: { _id: "$group", students: { $push: "$first_name"} }
  //   }
  // ])
  // console.log(result)

  // Desafio 3
  // const result = await studentModel.aggregate([
  //   {
  //     $match: { group: "1B" }
  //   },
  //   {
  //     $group: { _id: "$group", totalGrade: { $sum: "$grade" }, totalStudents: { $sum: 1 } }
  //   },
  //   {
  //     $project: { _id: 1, promedio: { $divide: ["$totalGrade", "$totalStudents"] }}
  //   }
  // ])

  // console.log(result)

  // Desafio 4
  // const result = await studentModel.aggregate([
  //   {
  //     $match: { group: "1A" }
  //   },
  //   {
  //     $group: { _id: "$group", totalGrade: { $sum: "$grade" }, totalStudents: { $sum: 1 } }
  //   },
  //   {
  //     $project: { _id: 1, promedio: { $divide: ["$totalGrade", "$totalStudents"] }}
  //   }
  // ])

  // console.log(result)

  // Desafio 5
  // const result = await studentModel.aggregate([
  //   {
  //     $group: { _id: "Total", totalGrade: { $sum: "$grade" }, totalStudents: { $sum: 1 } }
  //   },
  //   {
  //     $project: { _id: 1, promedio: { $divide: ["$totalGrade", "$totalStudents"] }}
  //   }
  // ])

  // console.log(result)

  // Desafio 6
  // const result = await studentModel.aggregate([
  //   {
  //     $match: { gender: "Male" }
  //   },
  //   {
  //     $group: { _id: "Hombres", totalGrade: { $sum: "$grade" }, totalStudents: { $sum: 1 } }
  //   },
  //   {
  //     $project: { _id: 1, promedio: { $divide: ["$totalGrade", "$totalStudents"] }}
  //   }
  // ])

  // console.log(result)

  // Desafio 7

  const result = await studentModel.aggregate([
    {
      $match: { gender: "Female" }
    },
    {
      $group: { _id: "Mujeres", totalGrade: { $sum: "$grade" }, totalStudents: { $sum: 1 } }
    },
    {
      $project: { _id: 1, promedio: { $divide: ["$totalGrade", "$totalStudents"] }}
    }
  ])

  console.log(result)



}

environment()