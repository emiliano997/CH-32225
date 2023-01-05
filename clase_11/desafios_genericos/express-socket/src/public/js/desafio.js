const socket = io();

const input = document.querySelector('#mensaje');

input.addEventListener('input', (e) => {
  // console.log(input.value);
  socket.emit('input', input.value)
});

socket.on('mensaje', (data) => {
  document.querySelector('p').innerHTML = data
})

socket.on('mensajes_chat', (data) => {
  const mensajes = data.map(msg => {
    return `Socket: ${msg.socketid} -> Mensaje: ${msg.mensaje}`
  }).join('<br>')
  document.querySelector('#mensajes').innerHTML = mensajes;
})