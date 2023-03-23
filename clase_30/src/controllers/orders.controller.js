export const getOrders = async (req, res) => {
  res.json({ status: 'Ok', result: 'getOrders' })
}

export const getOrderById = async (req, res) => {
  res.json({ status: 'Ok', result: 'getOrderById' })
}

export const createOrder = async (req, res) => {
  res.json({ status: 'Ok', result: 'createOrder' })
}

export const resolveOrder = async (req, res) => {
  res.json({ status: 'Ok', result: 'resolveOrder' })
}