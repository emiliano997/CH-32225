import express from 'express';
import usersRouter from './routes/users.routes.js';
import errorHandler from './middlewares/errors/index.js';

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);
app.use(errorHandler);

app.listen(3000, () => console.log('Server running on port 3000'));