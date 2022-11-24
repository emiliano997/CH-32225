const mostrarLista = (arreglo) => {
  if(arreglo.length === 0){
    console.log('Lista vacia')
    return arreglo.length
  }

  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i])
  }

  return arreglo.length

}

let largoArreglo = mostrarLista([1, 2, 3])
console.log(`Largo arreglo 1: ${largoArreglo}`)

console.log(`Largo Arreglo 2: ${mostrarLista([])}`)