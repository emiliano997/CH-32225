import express from 'express';
import userRoutes from './routes/users.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import businessRoutes from './routes/business.routes.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// DB Connection
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017/coder-eats', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('DB connected'))
.catch((err) => console.log(err))


// Routes
app.use('/api/users', userRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/business', businessRoutes);

// Listener
app.listen(3000, () => console.log('Server running on port 3000'));