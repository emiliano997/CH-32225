import express from 'express';
import compression from 'express-compression';

const app = express();

// Gzip
// app.use(compression());

// Brotli
app.use(compression({
  brotli: { enabled: true, zlib: {}}
}))

app.get('/string_largo', (req, res) => {
  let string = 'Esto es un string largo';

  for(let i = 0; i < 5e4; i++) {
    string += 'Esto es un string largo';
  }

  res.send(string);
})

app.listen(3000, () => console.log('Server running on port 3000'))