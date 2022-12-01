const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calculadora = (num1, num2, cb) => {
  let resultado = cb(num1, num2)
  return resultado
}

console.log(calculadora(2, 5, sumar))
console.log(calculadora(2, 5, restar))
console.log(calculadora(2, 5, multiplicar))
console.log(calculadora(2, 5, dividir))
console.log(calculadora(2, 5, (num1, num2) => num1 + num2))
