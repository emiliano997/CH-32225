const fs = require('fs')

const crearInfo = async () => {
  try {
    let package = await fs.promises.readFile('package.json', 'utf-8')
    let { size } = await fs.promises.stat('package.json')

    const info = {
      contenidoStr: package,
      contenidoObj: JSON.parse(package),
      size
    }

    console.log(info)

    await fs.promises.writeFile('./info.json', JSON.stringify(info, null, '\t'))

  } catch(error) {
    // console.log('Error:', error)
    throw new Error(error)
  }
}

crearInfo()