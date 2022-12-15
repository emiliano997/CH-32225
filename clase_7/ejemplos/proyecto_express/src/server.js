import express from 'express';
import userManager from './UserManager.js'

const app = express()

const productos = [
  {
    id: 1,
    nombre: "Parlantes",
    precio: 200,
  },
  {
    id: 2,
    nombre: "Mouse",
    precio: 15,
  },
  {
    id: 3,
    nombre: "Teclado Mecanico",
    precio: 250,
  },
];

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.get('/usuario/:id', async (req, res) => {
  const { id } = req.params
  const users = userManager.getUsers()
  console.log(users)
  const user = users.find(user => user.id == id)
  console.log(user)

  if(!user) {
    return res.send('User not found')
  }

  res.json(user)
})

app.get('/productos', (req, res) => {
  const { nombre, precio } = req.query
  const producto = productos.find(prod => prod.nombre === nombre || prod.precio == precio)

  if(!producto) {
    return res.send('Producto not found')
  }
  res.json(producto)
})

app.listen(3000, () => console.log('Listening on port 3000'))