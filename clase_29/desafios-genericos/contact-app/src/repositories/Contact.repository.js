import ContactDTO from '../dao/dto/contacts.dto.js'

export default class ContactRepository {
  constructor(dao) {
    this.dao = dao
  }

  getContacts = async () => {
    return await this.dao.get();
  }

  createContact = async (contact) => {
    const newContact = new ContactDTO(contact);
    const result = await this.dao.create(newContact);
    return newContact;
  }
}