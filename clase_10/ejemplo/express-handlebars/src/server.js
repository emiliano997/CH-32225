import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './dirname.js';
import viewRoutes from './routes/views.routes.js';

const app = express();

// Configuracion handlebars
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'main'
}))

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`))

// Endpoint
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Pagina web',
    name: 'Emi',
    age: 25
  })
})

// Otro ejemplo
const food = [
  { name: 'Pizza', price: 100 },
  { name: 'Hamburguesa', price: 80 },
  { name: 'Empanada', price: 20 },
  { name: 'Milanesa', price: 60 },
  { name: 'Fideos', price: 40 },
]

app.get('/food', (req, res) => {
  const user = {
    name: 'Emi',
    role: 'admin'
  }
  res.render('food', {
    user,
    isAdmin: user.role === 'admin',
    title: 'Food',
    food
  })
})

app.use('/', viewRoutes);

app.listen(3000, () => console.log('Server corriendo en el puerto 3000'))