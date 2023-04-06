const express = require('express');
const { sumar, restar, multiplicar, dividir  } = require('paquete-operaciones-emi')

const app = express();

app.get('/', (req, res) => {
    res.send('Hola Weyes'); 
});

app.get('/sumar', (req, res) => {
  const { num1, num2 } = req.query;

  res.send(`La suma de ${num1} y ${num2} es ${sumar(Number(num1), Number(num2))}`); 
})

app.get('/restar', (req, res) => {
  const { num1, num2 } = req.query;

  res.send(`La suma de ${num1} y ${num2} es ${restar(Number(num1), Number(num2))}`); 
})

app.get('/multiplicar', (req, res) => {
  const { num1, num2 } = req.query;

  res.send(`La suma de ${num1} y ${num2} es ${multiplicar(Number(num1), Number(num2))}`); 
})

app.get('/dividir', (req, res) => {
  const { num1, num2 } = req.query;

  res.send(`La suma de ${num1} y ${num2} es ${dividir(Number(num1), Number(num2))}`); 
})

app.listen(8080, () => console.log('Servidor escuchando en el port 8080'));