import { Router } from 'express'

const router = Router()
const pets = []

router.get('/', (req, res) => {
  res.status(200).json({ pets })
})

router.post('/', (req, res) => {
  const { name, age, gender } = req.body

  if(!name) {
    throw new Error('Name is required')
  }

  if(!age) {
    throw new Error('Age is required')
  }

  if(!gender) {
    throw new Error('Gender is required')
  }

  const pet = {
    id: pets.length == 0 ? 1 : pets.length + 1,
    name,
    age,
    gender
  }

  pets.push(pet)

  res.status(201).json({ info: "Created", pet })
})

export default router