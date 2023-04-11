import express from 'express';

const app = express();

app.get('/operacionSencilla', (req, res) => {
  let sum = 0

  for(let i = 0; i < 100000; i++) {
    sum += i;
  }

  res.send({ sum });
});

app.get('/operacionCompleja', (req, res) => {
  let sum = 0

  for(let i = 0; i < 5e8; i++) {
    sum += i;
  }

  res.send({ sum });
});

app.listen(3000, () => console.log('Server listening on port 3000!'));