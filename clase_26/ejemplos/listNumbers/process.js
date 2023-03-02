const args = process.argv

process.on('exit', (code) => {
  if(code) {
    console.log('Process exited with code: ', code)
  } else {
    console.log('Process exited without code')
  }
})

process.on('uncaughtException', (error) => {
  console.log(error)
  switch(error.description) {
    case 'empty':
      return process.exit(-4)
    case 'type error':
      return process.exit(-5)
    default:
      return process.exit()
  }
})

function checkEmpty(numbers) {
  if(numbers.length === 0) {
    throw {
      description: 'empty'
    }
  }

  for(const number of numbers) {
    const val = Number(number)
    if(isNaN(val)) {
      throw {
        description: 'type error',
        numbers: numbers,
        tipos: numbers.map((n) => (isNaN(n) ? typeof n : 'number'))
      }
    }
  }
}

const numbers = args.slice(2)
checkEmpty(numbers)

console.log(numbers)