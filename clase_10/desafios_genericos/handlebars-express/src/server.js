import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './dirname.js';
import usersRoutes from './routes/users.routes.js';

const app = express();

const users = [
  { nombre: 'Emi', apellido: 'Perez', edad: 25, correo: 'emi@gmail.com', telefono: '1234546643'},
  { nombre: 'Lucas', apellido: 'Perez', edad: 21, correo: 'lucas@gmail.com', telefono: '1234546643'},
  { nombre: 'Esteban', apellido: 'Perez', edad: 30, correo: 'esteban@gmail.com', telefono: '1234546643'}
]

// Configuracion handlebars
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'main'
}))

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint
app.get('/', (req, res) => {
  const num = Math.floor(Math.random() * users.length)
  console.log(users[num])
  res.render('index', {
    user: users[num]
  })
})

app.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register'
  })
})

app.get('/succes')

app.use('/user', usersRoutes)


app.listen(3000, () => console.log('Server corriendo en el puerto 3000'))