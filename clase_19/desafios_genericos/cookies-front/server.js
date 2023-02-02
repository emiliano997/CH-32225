import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Endpoints
app.post('/setCookie', (req, res) => {
  const { name, email } = req.body;
  res.cookie(name, email, { maxAge: 10000 });
  res.redirect('/')
})

app.get('/getCookies', (req, res) => {
  res.json(req.cookies)
})

app.listen(3000, () => console.log('Server on port 3000'));