import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js'

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }))

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://emi:admin@coder-32225.gm7v3k1.mongodb.net/colegio?retryWrites=true&w=majority', (error) => {
  if(error){
    console.log(error);
  } else {
    console.log('Connected to Mongo Atlas');
  }
})

// MongoDB Local
// mongoose.connect('mongodb://127.0.0.1:27017/coderhouse', (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Connected to MongoDB');
//   }
// })

app.use('/users', userRoutes);

app.listen(3000, () => console.log(`Server on port ${3000}`))

