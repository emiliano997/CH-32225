import express from 'express';
import { generateToken, authToken } from './utils.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  const exist = users.find((u) => u.email === email);

  if (exist) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = {
    name,
    email,
    password
  }

  users.push(user);
  const accessToken = generateToken(user);
  res.json({ user, accessToken });

})

app.post('/login',  (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const accessToken = generateToken(user);
  res.json({ user, accessToken });
})

app.get('/current', authToken, (req, res) => {
  console.log(req.user)
  res.json(req.user);
})

app.listen(3000, () => console.log('Server running on port 3000'))