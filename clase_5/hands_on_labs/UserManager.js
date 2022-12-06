const fs = require('fs')

class ManagerUsuarios {
  constructor(filename){
    if(fs.existsSync('./Usuarios.json')){
      this.usuarios = JSON.parse(fs.readFileSync('./Usuarios.json', 'utf-8'))
    } else {
      this.usuarios = []
    }
  }
  async crearUsuario(nombre, apellido, edad, curso){
    const usuario = {
      nombre,
      apellido,
      edad,
      curso,
      fecha: new Date().toLocaleString()
    }

    this.usuarios.push(usuario)

    await fs.promises.writeFile('./Usuarios.json', JSON.stringify(this.usuarios, null, '\t'))
    
    console.log('Usuario Creado')
  }

  async consultarUsuarios(){
    return  JSON.parse(await fs.promises.readFile('./Usuarios.json')) 
  }

  async eliminarUsuario(nombre) {
    let user = this.usuarios.findIndex(usuario => usuario.nombre === nombre)
    console.log(user)
    
    user = this.usuarios
    await fs.promises.writeFile('./Usuarios.json', JSON.stringify(this.usuarios, null, '\t'))
    return 

  }
}

const usuarioManager = new ManagerUsuarios()

// usuarioManager.crearUsuario({
//   nombre: 'Pepito',
//   apellido: 'Perez',
//   edad: 25,
//   curso: 'Backend'
// })

// usuarioManager.consultarUsuarios()
//   .then(data => console.log(data))

usuarioManager.eliminarUsuario('Pepito')
  .then(resultado => console.log(resultado))
