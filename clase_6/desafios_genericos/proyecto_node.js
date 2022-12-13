const objeto = {}

const repeticiones = 100000

for(let i = 0; i < repeticiones; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 20) + 1
  if(objeto[numeroAleatorio]){
    objeto[numeroAleatorio]++
  }else {
    objeto[numeroAleatorio] = 1
  }
}

console.log(objeto)