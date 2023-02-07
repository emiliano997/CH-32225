import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import handlebars from 'express-handlebars';
import __dirname from './dirname.js';
import sessionRoutes from './routes/session.routes.js'
import viewsRoutes from './routes/views.routes.js'
import mongoose from 'mongoose';
import flash from 'connect-flash';

const app = express()

// Config server
app.use(flash())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
mongoose.connect('mongodb://localhost:27017/coderteacher', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set('strictQuery', true)

// Mongo Storage
app.use(session({
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/coderteacher',
    mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
    ttl: 60,
  }),
  secret: 'c0d3rT3@ch3r',
  resave: false,
  saveUninitialized: false,
}));

// Configuración de Handlebars
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'main',
}))

app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

// Routes
app.use('/', viewsRoutes)
app.use('/api/sessions', sessionRoutes)

app.listen(3000, () => console.log('Server running on port 3000'))

