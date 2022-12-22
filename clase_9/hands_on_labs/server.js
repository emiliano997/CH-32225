import express from 'express'
import userRoutes from './routes/users.routes.js'
import petRoutes from './routes/pets.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

console.log(`${__dirname}`)

// Endpoints
app.use('/api/user', userRoutes)
app.use('/api/pet', petRoutes)

app.listen(3000, () => console.log('Listening on port 3000'))