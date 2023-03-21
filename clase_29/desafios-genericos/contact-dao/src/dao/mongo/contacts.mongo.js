import contactModel from "./model/Contacts.js";

export default class Contacts {
  constructor(){}

  get = async () => {
    return await contactModel.find();
  }

  add = async (contact) => {
    return await contactModel.create(contact)
  }

}