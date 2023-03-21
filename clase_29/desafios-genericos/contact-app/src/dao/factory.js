import mongoose from "mongoose";
import config from "../config/config.js";

export let Contact;

switch(config.persitence){
  case 'MONGO':
    const connect = mongoose.connect('mongodb://localhost:27017/contactos', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));
    const {default: ContactsMongo} = await import('./mongo/contacts.mongo.js');
    Contact = ContactsMongo
    break;

  case 'MEMORY':
    const {default: ContactsMemory} = await import('./memory/contacts.memory.js');
    Contact = ContactsMemory
    break;
}