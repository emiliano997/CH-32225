export const getUsers = async (req, res) => {
  res.json({ status: 'Ok', result: 'getUsers' })
}

export const getUserById = async (req, res) => {
  res.json({ status: 'Ok', result: 'getUserById' })
}

export const createUser = async (req, res) => {
  res.json({ status: 'Ok', result: 'createUser' })
}

export const updateUser = async (req, res) => {
  res.json({ status: 'Ok', result: 'updateUser' })
}