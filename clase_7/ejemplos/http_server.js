const http = require('http');

const server = http.createServer((peticion, respuesta) => {
  respuesta.end('Mi primer servidor')
})

server.listen(3000, () => console.log('Server listening on port 3000'))