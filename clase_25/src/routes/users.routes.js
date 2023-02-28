import { Router } from 'express';
import usersDao from '../daos/dbManager/users.dao.js';
import { hashPassword } from '../utils.js';

const router = Router();

router.get('/', async (req, res) => {
  const users = await usersDao.getAll();
  res.json(users);
})

router.get('/:id', async (req, res) => {
  const user = await usersDao.getById(req.params.id);
  res.json(user);
})

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  if(!username || !email || !password) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }

  try {
    const user = {
      username,
      email,
      password: hashPassword(password),
    }

    const newUser = await usersDao.create(user);
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});

router.delete('/:id', async (req, res) => {
  const user = await usersDao.getById(req.params.id);
  if(!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  await usersDao.delete(req.params.id);
  res.json({ message: 'User deleted' });
});

export default router;