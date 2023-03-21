export default class Contacts {
  constructor() {
    this.data = []
  }

  get = () => {
    return this.data
  }

  add = (contact) => {
    this.data.push(contact)
  }
}