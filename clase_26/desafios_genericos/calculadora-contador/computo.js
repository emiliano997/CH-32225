const calculo = () => {
  let sum = 0
  for(let i = 0; i < 6e9; i++) {
    sum += i
  }
  return sum
}

process.on('exit', () => {
  console.log(`Worker #${process.pid} terminó con código`)
})

process.on('message', (msg) => {
  console.log(`Worker #${process.pid} inicio la tarea`)
  const sum = calculo()
  process.send(sum);
  console.log(`Worker #${process.pid} finalizó la tarea`)
  process.exit()
})

process.send('Listo')