import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import FileStore from 'session-file-store';
import MongoStore from 'connect-mongo';

const fileStorage = new FileStore(session);
const app = express();

// Server config
app.use(cookieParser())
app.use(session({
  secret: 's3cr37',
  resave: false,
  saveUninitialized: false,
  // File storage
  // store: new fileStorage({ path: './src/sessions', retries: 0, ttl: 60 })
  
  // Mongo Storage
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/coderhouse',
    mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
    // ttl: 15
  })
}))

// Endpoints
app.get('/', (req, res) => {
  if(!req.session.contador) {
    req.session.contador = 0
  }

  req.session.contador++;

  res.send(`Contador: ${req.session.contador}`)
})

app.get('/session', (req, res) => {
  res.send(req.session)
})

app.get('/logout', (req, res) => {
  req.session.destroy()
  res.send('Sesion eliminada')
})

app.listen(3000, () => console.log(`Server on port 3000`))