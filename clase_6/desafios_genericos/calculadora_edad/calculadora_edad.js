const moment = require('moment');

const fechaActual = moment()
const fechaNacimiento = moment('1997-01-19')

if(fechaNacimiento.isValid()) {
  console.log('Es valido')
  const dias = fechaActual.diff(fechaNacimiento, 'miliseconds')
  console.log(`Dias: ${dias}`)
}

console.log(fechaNacimiento)