const sumar = (num1, num2) => {
  return new Promise((resuelto, rechazado) => {
    if(num1 <= 0 || num2 <= 0) {
      rechazado('Operacion Innecesaria')
    } else {
      resuelto(num1 + num2)
    }
  })
}

const restar = (num1, num2) => {
  return new Promise((resuelto, rechazado) => {
    if(num1 <= 0 || num2 <= 0){
      rechazado('Operacion invalida')
    } else {
      let resultado = num1 - num2
      if(resultado < 0) {
        rechazado(`La calculadora solo calcula numeros positivos ${resultado}`)
      } else {
        resuelto(resultado)
      }
    }
  })
}

const multiplicar = (num1, num2) => {
  return new Promise((resuelto, rechazado) => {
    if(num1 < 0 || num2 < 0){
      rechazado('La calculadora solo puede devoler valores positivos')
    } else {
      resuelto(num1 * num2)
    }
  })
}

const dividir = (num1, num2) => {
  return new Promise((resuelto, rechazado) => {
    if(num2 == 0) {
      rechazado('No se puede dividir por 0, cabezon')
    } else {
      resuelto(num1 / num2)
    }
  })
}

const calculadora = async (num1, num2) => {
  try {
    let suma = await sumar(num1, num2)
    console.log(suma)

    let resta = await restar(num1, num2)
    console.log(resta)

    let multiplicacion = await multiplicar(num1, num2)
    console.log(multiplicacion)

    let division = await dividir(num1, num2)
    console.log(division)

  } catch (error) {
    console.log('No se pudo calcular:', error)
  }
}

// Pruebas
// calculadora(2, 4)
// calculadora(0, 1)
// calculadora(-1, -5)
// calculadora(5, 5)
// calculadora("a", 1)