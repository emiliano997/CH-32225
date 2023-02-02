import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser('secreto')); // se debe pasar una clave secreta para firmar las cookies

app.get('/setCookie', (req, res) => {
  const objeto = {
    nombre: 'Coder',
    apellido: 'House',
    edad: 32,
  }
  res.cookie('Coder Cookie', JSON.stringify(objeto), { maxAge: 10000 }) // setea una cookie
  res.send('Cooke seteada')
})

app.get('/getCookie', (req, res) => {
  const cookies = {
    cookies: req.cookies,
    
  }

  if(req.signedCookies['Coder Cookie Signed']) {
    cookies.signed = true
  }
  res.send(cookies) // devuelve un objeto con todas las cookies
})

app.get('/deleteCookie', (req, res) => {
  res.clearCookie('Coder Cookie') // borra la cookie
  res.send('Cookie borrada')
})

app.get('/signedCookie', (req, res) => {
  res.cookie('Coder Cookie Signed', 'Coder House', { signed: true, maxAge: 1000000 }) // setea una cookie firmada
  res.send('Cookie firmada')
})

app.listen(3000, () => console.log('Server running on port 3000'))