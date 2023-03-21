import { Router } from 'express';
// import Contacts from '../dao/memory/contacts.memory.js';
import Contacts from '../dao/mongo/contacts.mongo.js'

const router = Router();
const contactsServices = new Contacts();

router.get('/', async (req, res) => {
  // const contacts = contactsServices.get(); // Memory
  const contacts = await contactsServices.get(); // Memory
  res.json(contacts);
});

router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;
  // const result = contactsServices.add({ name, email, phone }); // Memory
  const result = await contactsServices.add({ name, email, phone }); // Memory
  console.log(result)
  res.json({ status: 'Ok'});
})

export default router;