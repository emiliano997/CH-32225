import express, { urlencoded } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import initializePassport from './config/passport.config.js';
import { authorization, passportCall } from './utils.js';

const app = express();

app.use(cookieParser())
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(express.static('public'))
initializePassport()
app.use(passport.initialize())

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if(email === 'emi@gmail.com' && password === '123456') {
    const token = jwt.sign({ email, password, role: 'ver_user' }, 'coderSecret', { expiresIn: '5m'})
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

// app.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
//   res.json({ user: req.user })
// })


app.get('/current', passportCall('jwt'), authorization(['ver_user']), (req, res) => {
  res.json({ user: req.user })
})

app.listen(3000, () => console.log('Server listen on port 3000'))