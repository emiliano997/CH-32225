// import fs from 'fs';
const fs = require("fs");

class File {
  constructor(name) {
    this.name = `${__dirname}/db/${name}.json`;

    try {
      this.elements = JSON.parse(fs.readFileSync(this.name, "utf-8"));
    } catch {
      this.elements = [];
    }
  }

  getAll(name) {
    return this.elements;
  }

  getById(id) {
    return this.elements.find((elemento) => elemento.id === id);
  }

  async save(element) {
    try {
      element = {
        id: this.elements.length
          ? this.elements[this.elements.length - 1].id + 1
          : 1,
        ...element,
      };

      this.elements.push(element);

      await fs.promises.writeFile(
        this.name,
        JSON.stringify(this.elements, null, "\t")
      );
      console.log("Element saved");
      return { info: `${this.name} saved`, element}
    } catch (error) {
      console.log("Error saving element", error);
      return { info: 'Error saving element', error}
    }
  }

  async update(id, element) {
    try {
      let one = this.elements.find((elemento) => elemento.id === id);

      if(one) {
        const newElement = { ...one, ...element };

        const index = this.elements.findIndex((elemento) => elemento.id === id);
        this.elements[index] = newElement;

        await fs.promises.writeFile(
          this.name,
          JSON.stringify(this.elements, null, "\t")
        );

        console.log('Element updated');
        return { info: 'Element updated', element: newElement}

      } else {
        console.log("Element not found");
        return { info: 'Element not found'};
      }
    } catch (error) {
      console.log("Error updating element", error);
      return { info: 'Error updating element', error}
    }
  }

  async deleteById(id) {
    try {
      let one = this.elements.find((elemento) => elemento.id === id);

      if(one) {
        let index = this.elements.findIndex((elemento) => elemento.id === id);
        const element = this.elements.splice(index, 1);

        await fs.promises.writeFile(
          this.name,
          JSON.stringify(this.elements, null, "\t")
        );

        return { info: 'Element deleted', element}

      } else {
        console.log("Element not found");
        return { info: 'Element not found'};
      }
    } catch (error) {
      console.log("Error updating element", error);
      return { info: 'Error updating element', error}
    }
  }

  delete() {
    fs.truncateSync(this.name, 0, () => console.log('Content Deleted', this.name));
    return { info: 'Content Deleted', name: this.name}
  }
}

module.exports = File;