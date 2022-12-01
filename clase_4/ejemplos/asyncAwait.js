const dividir = (num1, num2) => {
  return new Promise((resuelto, rechazado) => {
    if(num2 == 0) {
      rechazado('No se puede dividir por 0, cabezon')
    } else {
      resuelto(num1 / num2)
    }
  })
}

const sumar = (num1, num2) => {
  return new Promise((resuelto, rechazado) => {
    if(num1 <= 0 || num2 <= 0) {
      rechazado('No quiero sumar por 0')
    } else {
      resuelto(num1 + num2)
    }
  })
}

const calculadora = async (mensaje, num1, num2) => {
  try {
    let division = await dividir(num1, num2)
    console.log(mensaje, division)
    let suma = await sumar(num1, num2)
    console.log(mensaje, suma)

  } catch(error) {
    console.log('No se pudo realizar el calculo', error)
  }
}

calculadora('Calculo1', 2, 0)
calculadora('Calculo2', 2, 3)
calculadora('Calculo3', 0, 3)