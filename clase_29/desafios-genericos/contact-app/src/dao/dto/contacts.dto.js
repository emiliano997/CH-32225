export default class ContactDTO{
  constructor(contact){
    this.name = contact.name;
    this.email = contact.email;
    this.phone = contact.phone;
  }
}