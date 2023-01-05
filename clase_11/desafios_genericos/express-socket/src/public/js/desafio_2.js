const socket = io();

const input = document.querySelector('#mensaje');
const input2 = document.querySelector('#nombre');

document.querySelector('#send').addEventListener('click', (event) => {
  event.preventDefault()

  socket.emit('mensaje_chat', {
    mensaje: input.value,
    nombre: input2.value
  });
})

socket.on('mensajes_chat', (data) => {
  const mensajes = data.map(msg => {
    return `Socket: ${msg.socketid} -> Mensaje: ${msg.mensaje}`
  }).join('<br>')
  document.querySelector('p').innerHTML = mensajes;
})
