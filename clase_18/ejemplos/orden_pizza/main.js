import mongoose from 'mongoose';
import orderModel from './models/order.js'

const environment = async () => {
  await mongoose.connect('mongodb://localhost:27017/coderhouse')
  console.log('Connected to MongoDB')
  
  // Insert
  // const result = await orderModel.insertMany([
  //   { name: "Pepperoni", size: "small", price: 19, quantity: 10, date: "2021-05-01" },
  //   { name: "Pepperoni", size: "medium", price: 20, quantity: 20, date: "2021-05-02" },
  //   { name: "Pepperoni", size: "large", price: 21, quantity: 30, date: "2021-05-03" },
  //   { name: "Cheese", size: "small", price: 12, quantity: 15, date: "2021-05-04" },
  //   { name: "Cheese", size: "medium", price: 13, quantity: 50, date: "2021-05-05" },
  //   { name: "Cheese", size: "large", price: 14, quantity: 10, date: "2021-05-06" },
  //   { name: "Vegan", size: "small", price: 17, quantity: 10, date: "2021-05-07" },
  //   { name: "Vegan", size: "medium", price: 18, quantity: 10, date: "2021-05-08" }, 
  // ])
  // console.log(result);

  // Find
  // const result = await orderModel.find()
  // console.log(result);

  // Agregation
  const result = await orderModel.aggregate([
    {
      // Stage 1: Buscamos por tamaño
      $match: { size: "large"}
    },
    {
      // Stage 2: Agrupo por nombre y cantidad total
      $group: { _id: "$name", totalQuantity: { $sum: "$quantity" }  }
    },
    {
      // Stage 3: Ordeno por cantidad total de mayor a menor
      $sort: { totalQuantity: -1 }
    },
    {
      // Stage 4: Guardo los documentos ordenados dentro de el campo orders
      $group: { _id: 1, orders: { $push: "$$ROOT" }}
    },
    {
      // Stage 5: Creo un nuevo documento con el campo orders
      $project: { _id: 0, orders: "$orders" }
    },
    {
      // Ultimo Stage: Guardo el documento en la coleccion reports
      $merge: { into: "reports" }
    }
  ])
  console.log(result)


}

environment();