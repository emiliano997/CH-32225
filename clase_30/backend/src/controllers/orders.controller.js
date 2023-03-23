import Business from "../dao/classes/business.dao.js"
import User from '../dao/classes/user.dao.js'
import Order from '../dao/classes/order.dao.js'

const businessServices = new Business()
const userServices = new User()
const orderServices = new Order()

export const getOrders = async (req, res) => {
  const result = await orderServices.getOrders()
  if(!result) return res.status(500).json({ status: 'Error', result: 'Something went wrong, try later' })
  res.json({ status: 'Ok', result })
}

export const getOrderById = async (req, res) => {
  const { id } = req.params
  const result = await orderServices.getOrderById(id)
  if(!result) return res.status(500).json({ status: 'Error', result: 'Something went wrong, try later' })
  res.json({ status: 'Ok', result })
}

export const createOrder = async (req, res) => {
  const { user, business, products } = req.body
  const resultUser = await userServices.getUserById(user);
  const resultBusiness = await businessServices.getBusinessById(business);

  const actualOrders = resultBusiness.products.filter(product => products.includes(product._id))
  const total = actualOrders.reduce((acc, prev) => {
    acc += prev.price
    return acc
  }, 0)

  const number = Date.now() + Math.floor(Math.random() * 1000 + 1)

  const order = {
    number,
    business,
    user,
    products: actualOrders.map(product => product.id),
    totalPrice: total,
    status: 'pending'
  }

  const result = await orderServices.createOrder(order)
  if(!result) return res.status(500).json({ status: 'Error', result: 'Something went wrong, try later' })

  resultUser.orders.push(result._id)

  await userServices.updateUser(user, resultUser)

  res.json({ status: 'Ok', result })
}

export const resolveOrder = async (req, res) => {
  const { resolve } = req.body
  const { id } = req.params
  const result = await orderServices.getOrderById(id)
  
  if(!result) return res.status(500).json({ status: 'Error', result: 'Something went wrong, try later' })

  result.status = resolve

  const resultDB = await orderServices.resolveOrder(id, result)
  res.json({ status: 'Ok', result: resultDB })
}