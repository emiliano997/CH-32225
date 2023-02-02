import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
  secret: 'coderhouse',
  resave: true,
  saveUninitialized: true
}))

const auth = (req, res, next) => {
  if(req.session.user && req.session.admin) {
    next();
  } else {
    res.send('No estas logueado')
  }
}

// Ejemplo Session
app.get('/session', (req, res) => {
  // Desafio
  const { name } = req.query;
  if(req.session.contador) {
    req.session.contador++;
    console.log(req.session)
    if(name) {

      res.send(`${name} haz visitado esta pagina ${req.session.contador} veces`)
    } else {
      res.send(`Haz visitado esta pagina ${req.session.contador} veces`)
    }
  } else {
    req.session.contador = 1;
    console.log(req.session)
    if(name) {
      res.send(`${name} Bienvenido`)
    } else {
      res.send(`Bienvenido`)
    }
  }
})

app.get('/profile', (req, res) => {
  if(req.session.user) {
    res.send(`Nombre: ${req.session.user}`)
  } else {
    res.send('No estas logueado')
  }
})

app.get('/privado', auth, (req, res) => {
  
    res.send('Contenido privado')
  
})

const users = ['admin', 'pepe', 'arturo']

app.get('/login', (req, res) => {
  const { user, password } = req.query; 
  if(users.includes(user) && password === '1234') {
    req.session.user = user;
    if(user === 'admin') {
      req.session.admin = true;
    }
    res.send('Bienvenido')
  } else {
    res.send('Usuario o contraseña incorrectos')
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if(error) {
      console.log(error)
    } else {
      res.send('Sesion cerrada')
    }
  })
})

app.listen(3000, () => console.log('Server on port 3000'));