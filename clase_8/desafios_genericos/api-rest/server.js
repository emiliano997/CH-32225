const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// const frase = "Frase Inicial"
const frase = ["Frase", "Inicial"]

// Endpoints
app.get('/api/frase', (req, res) => {
  res.json({
    frase: frase.join(' ')
  })
})

app.get('/api/palabras/:pos', (req, res) => {
  const { pos } = req.params

  res.json({
    buscada: frase[Number(pos) - 1]
  })
})

app.post('/api/palabras', (req, res) => {
  const { palabra } = req.body
  frase.push(palabra)
  
  res.status(201).json({
    agregada: palabra,
    pos: frase.length 
  })
})

app.put('/api/palabras/:pos', (req, res) => {
  const { pos } = req.params
  const { palabra } = req.body
  
  const anterior = frase[Number(pos) - 1]
  frase[Number(pos) - 1] = palabra

  res.json({
    actualizada: palabra,
    anterior
  })
})

app.delete('/api/palabras/:pos', (req, res) =>{
  const { pos } = req.params

  const eliminado = frase.splice((Number(pos) - 1), 1)
  res.json({
    eliminado
  })
})



app.listen(3000, () => console.log('Listening on port 3000'))