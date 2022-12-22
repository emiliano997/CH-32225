import { Router } from 'express'
import { uploader } from '../utils/multer.js'

const router = Router()
const pets = []

router.get('/', (req, res) => {
  res.status(200).json({ pets })
})

router.post('/', uploader.single('thumbnail'), (req, res) => {
  const { name, age, gender } = req.body
  console.log(req.file)

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
    gender,
    thumbnail: req.file.filename
  }

  pets.push(pet)

  res.status(201).json({ info: "Created", pet })
})

export default router