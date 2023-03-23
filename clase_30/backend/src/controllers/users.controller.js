import User from "../dao/classes/user.dao.js"

const userServices = new User()

export const getUsers = async (req, res) => {
  const result = await userServices.getUsers()
  if(!result) return res.status(500).json({ status: 'Error', result: 'Something went wrong, try later' })
  res.json({ status: 'Ok', result })
}

export const getUserById = async (req, res) => {
  const { id } = req.body
  const result = await userServices.getUserById(id)
  if(!result) return res.status(500).json({ status: 'Error', result: 'Something went wrong, try later' })
  res.json({ status: 'Ok', result })
}

export const createUser = async (req, res) => {
  const user = req.body;
  const result = await userServices.createUser(user)
  if(!result) return res.status(500).json({ status: 'Error', result: 'Something went wrong, try later' })
  res.json({ status: 'Ok', result })
}

export const updateUser = async (req, res) => {
  res.json({ status: 'Ok', result: 'updateUser' })
}