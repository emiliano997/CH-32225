class Contador {
  // Se ejecuta cuando instancio la clase
  constructor(nombre) {
    this.nombre = nombre;
    this.contador = 0
  }

  // Se aplica a todas las instancias
  // Solo se accede a nivel de clase por ser static
  static contadorGlobal = 0;

  getResponsable() {
    return `El responsable del contador es ${this.nombre}`
  }

  contar = () => {
    this.contador += 1
    Contador.contadorGlobal += 1
  }

  getCuentaIndividual() {
    return `Cuenta Individual de ${this.nombre}: ${this.contador}`
  }

  static getCuentaGlobal() {
    return `Cuenta global ${Contador.contadorGlobal}`
  }

}

const contador1 = new Contador(1231)
const contador2 = new Contador('Fernando')
const contador3 = new Contador('Osvaldo')

console.log(contador1.getResponsable())
console.log(contador2.getResponsable())
contador2.contar()
// Esto funciona
console.log(Contador.contadorGlobal)
// Esto no
console.log(contador3.contadorGlobal)


console.log(contador1.getCuentaIndividual())
console.log(contador2.getCuentaIndividual())
console.log(contador3.getCuentaGlobal())

contador2.contar()

console.log(contador1.getCuentaIndividual())
console.log(contador2.getCuentaIndividual())
console.log(contador3.getCuentaGlobal())

console.log(Contador.getCuentaGlobal())