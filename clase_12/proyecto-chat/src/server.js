import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './dirname.js';
import viewsRouter from './routes/views.routes.js';
import { Server } from 'socket.io';

const app = express();
const httpServer = app.listen(3000, () => console.log(`Server on port ${3000}`));

// Socket
const io = new Server(httpServer);
// socketServer

// Handlebars
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'main'
}))

// Express config
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

// Endpoints
app.use('/', viewsRouter);

const messages = [];

// Socket Server
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  socket.on('inicio', () => {
    io.sockets.emit('messageLogs', messages);
    socket.broadcast.emit('connected', messages);
  })

  socket.on("message", (data) => {
    console.log(data)
    messages.push(data)
    io.sockets.emit("messageLogs", messages);
  });
})