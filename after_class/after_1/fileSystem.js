const fs = require('fs')
const saveFile = require('./utils/saveFile')

class FileSystem {
  constructor(filename) {
      this.filename = filename 
      saveFaile(gnsdignsdgisdngisen)
      try {
        this.elements = fs.readFileSync(this.filename, 'utf8')
        this.elements = JSON.parse(this.elements)
      } catch(error) {
        this.elements = []
      }
    }

    getElements(){
      return this.elements
    }

    getElementsById(id) {
      try {
        return this.elements.filter(element => element.id === id)
      } catch (error) {
        return "No existen elementos"
      }
    }
    // { nombre, apellido } || { titulo, año }
    async save(elemento) {
      if(this.elements.length === 0) {
        elemento.id = 1
      } else {
        elemento.id = this.elements[this.elements.length - 1].id + 1
      }

      this.elements.push(elemento)

      try {
        await fs.promises.writeFile(this.filename, JSON.stringify(this.elements, null, '\t'))
        console.log('Element saved')
        // fs.promises.writeFile(this.filename, JSON.stringify(this.elements, null, '\t'))
        //   .then(() => console.log('Element saved'))
        //   .catch((error) => console.error('Error saving element:', error))
      } catch(error) {
        console.log('Error saving element:', error)
      }
    }

    delete() {
      // fs.unlinkSync(this.filename)
      fs.truncateSync(this.filename, 0, () => console.log('Content deleted') )
    }

    async deleteById(id) {
      try {
        const element = this.elements.findIndex((elemento) => elemento.id === id)

        if(element !== -1) {
          this.elements.splice(element, 1)
          await fs.promises.writeFile(this.filename, JSON.stringify(this.elements, null, '\t'))
        }
        else {
          console.log('Element not found')
        }
      } catch (error) {
        console.log('Error deleteById:', error)
      }
    }

    async update(id, element){
      try {
        const oldElement = this.elements.find((element) => element.id === id)
        const index = this.elements.findIndex((elemento) => elemento.id === id)

        if(index !== -1) {
          const newElement = {...oldElement, ...element }
          this.elements[index] = newElement
          await fs.promises.writeFile(this.filename, JSON.stringify(this.elements, null, '\t'))
          console.log('Content updated')
        }
      } catch(error) {
        console.log('Error update:', error)
      }
    }

}


const file = new FileSystem("./movies.json");

// file.save({title: 'Avengers', year: '2012'})
// file.save({title: 'Avengers: Age of Ultron', year: '2015'})
// file.save({title: 'Avengers: Infinity War', year: '2019'})
// file.save({title: 'Ant-man', year: '2018'})

console.log(file.getElements());

// file.deleteById(3);
// console.log(file.getElements());

file.update(4, { title: "Spiderman", year: '2002', actor: 'Tobey Mcguire' });
console.log(file.getElements());

// file.save({title: 'Mommy', year: '2003'})
// file.update(6, { year: "2002" });
// console.log(file.getElements());