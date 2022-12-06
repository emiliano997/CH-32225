const fs = require('fs')

const fsPromises = async (nombreArchivo) => {
  try{
    console.log(await fs.promises.writeFile(nombreArchivo, 'Buenas noches'))

    console.log(await fs.promises.readFile(nombreArchivo, 'utf-8'))
    

    await fs.promises.appendFile(nombreArchivo, '\nBuenos dias')
    
    texto = await fs.promises.readFile(nombreArchivo, 'utf-8')
    console.log(texto)

    await fs.promises.unlink(nombreArchivo)

  } catch (error) {
    console.log('Ocurrion un error', error)
  }
}

console.log('Holi')
fsPromises('./texto.txt')
console.log('Chau')