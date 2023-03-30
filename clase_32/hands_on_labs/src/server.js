import express from 'express';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use('/api/users', userRoutes);

app.listen(3000, console.log('Server running on port 3000'))