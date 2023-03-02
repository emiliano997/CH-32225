import express from 'express';
import { fork } from 'child_process';
import path from 'path';

const app = express();

function calculoLento() {
  let sum = 0
  for(let i = 0; i < 6e9; i++) {
    sum += i
  }
  return sum
}

let visitas = 0

app.get('/', (req, res) => {
  visitas++
  res.json({ visitas })
})

app.get('/bloqueante', (req, res) => {
  const sum = calculoLento()
  res.json({ sum })
})

app.get('/no-bloqueante', (req, res) => {
  const computo = fork(path.join(process.cwd(), 'computo.js'))
  computo.on('message', resultado => {
    if(resultado === 'Listo') {
      computo.send('inicio')
    } else {
      res.json({ resultado })
    }
  })
})

const server = app.listen(3000, () => {
  console.log(`Servidor escuchando en el puerto 3000`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))