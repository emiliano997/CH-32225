import express from 'express';
import petRoutes from './routes/pet.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/pets', petRoutes);

app.listen(3000, () => console.log('Server running on port 3000'))