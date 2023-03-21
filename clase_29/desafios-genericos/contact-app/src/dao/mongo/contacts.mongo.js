import contactsModel from "./model/Contacts.js";

export default class Contacts {
  constructor() {}

  get = async () => {
    return await contactsModel.find()
  }

  create = async (contact) => {
    return await contactsModel.create(contact)
  }
}