import express from 'express'
// const express = require('express')

const app = express()

app.get('/bienvenida', (req, res) => {
  res.send('<h1 style="color:blue;"> Bienvenido a mi pagina web </h1>')
})

app.get('/usuario', (req, res) => {
  const usuario = {
    name: 'Emi',
    age: 25,
    email: 'emi@gmail.com'
  }
  res.json(usuario)
})

app.get('*', (req, res) => {
  res.send('Error')
})

app.listen(3000, () => console.log('Server listening on port 3000'))