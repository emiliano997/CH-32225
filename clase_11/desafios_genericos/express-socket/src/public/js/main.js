const socket = io();

socket.on('mensaje', (data) => {
  console.log(data)
})

socket.emit('mensaje1', 'Mensaje del cliente')