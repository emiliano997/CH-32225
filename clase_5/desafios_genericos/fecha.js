const { writeFile, readFile } = require('fs')

const fecha = new Date().toString()

writeFile('./fecha_hora.txt', fecha, (error) => {
  if(error) console.log('Ocurrio un error:', error)

  readFile('./fecha_hora.txt', 'utf-8', (error, resultado) => {
    if(error) console.log('Ocurrio un error:', error)
    console.log(resultado)
  })

})

