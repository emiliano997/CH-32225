import express from 'express';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.routes.js'
import { Server } from 'socket.io';
import __dirname from './dirname.js';

const app = express();
const httpServer = app.listen(3000, () => console.log(`Server corriendo en puerto ${3000}`))

const io = new Server(httpServer);

// Configuracion handlebars
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'main'
}))

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Routers
app.use('/', viewsRouter);

io.on("connection", (socket) => {
  console.log('Se ha conectado un nuevo cliente');

  socket.emit('mensaje', 'Hola, soy un mensaje del servidor')
  socket.on('mensaje1', (data) => console.log(data))
})