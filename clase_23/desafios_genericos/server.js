import express, { urlencoded } from 'express';
import jwt from 'jsonwebtoken';
import __dirname from './dirname.js';

const app = express();

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if(email === 'emi@gmail.com' && password === '123456') {
    const token = jwt.sign({ email, password }, 'coderSecret', { expiresIn: '5m'})
    res.cookie('token', token, {
      maxAge: 5000,
      httpOnly: true
    })
    res.json({ token, message: 'Login Success'})
  } else {
    console.log('Usuario Incorrecto')
    res.json({ error: 'Wrong user' })
  }
})

app.listen(3000, () => console.log('Server listen on port 3000'))