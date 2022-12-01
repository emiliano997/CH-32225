const dividir = (num1, num2) => {
  return new Promise((resuelto, rechazado) => {
    if(num2 == 0) {
      rechazado('No se puede dividir por 0, cabezon')
    } else {
      resuelto(num1 / num2)
    }
  })
}

dividir(1, 5)
  .then(resultado => {
    dividir(resultado, 5)
      .then(resultado => console.log(resultado))
  })
  .catch(error => console.error(error))

dividir(10, 0)
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error))

dividir(5, 2)
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error))

console.log('Holi')