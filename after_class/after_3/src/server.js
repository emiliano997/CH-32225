import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './dirname.js'
import moviesRoutes from './routes/movies.routes.js'
import viewsRoutes from './routes/views.routes.js'
import mongoose from 'mongoose'
// Esto sirve para recorrer arrays en handlebars
import Handlebars from 'handlebars'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'

const app = express()

// Mongo Local
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/coderhouse', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected to MongoDB');
  }
})


// Configuración de Handlebars
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'main', 
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}))

// Configuracion de Express
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/movies', moviesRoutes)
app.use('/', viewsRoutes)

app.listen(3000, console.log('Server running on port 3000'))