import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js'
import viewsRoutes from './routes/view.routes.js';
import sessionRoutes from './routes/session.routes.js';
import mongoose from 'mongoose';
import passport from 'passport';
import initializaPassport from './config/passport.config.js';
import session from 'express-session';

const app = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/github-passport')
  .then(() => console.log('Conectado a MongoDB'))

// Config handlebars
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

initializaPassport()
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())

// Routes
app.use('/', viewsRoutes);
app.use('/api/sessions', sessionRoutes);

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));
