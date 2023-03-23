import orderModel from "../models/order.model";

export default class Order {
  getOrders = async () => {
    try {
      const orders = await orderModel.find();
      return orders;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getOrderById = async (id) => {
    try {
      const order = await orderModel.findOne({ _id: id });
      return order;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  createOrder = async (order) => {
    try {
      const newOrder = await orderModel.create(order);
      return newOrder;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  resolveOrder = async (id, order) => {
    try {
      const orderDB = await orderModel.findByIdAndUpdate({ _id: id }, { $set: order });
      return orderDB;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}