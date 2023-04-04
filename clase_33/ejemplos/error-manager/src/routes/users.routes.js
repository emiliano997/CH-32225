import { Router } from 'express';
import CustomError from '../services/CustomError.js';
import ErrorList from '../services/enums.js';
import { generateUserError } from '../services/info.js';

const users = []

const router = Router();

router.get('/', (req, res) => {
  res.send({ status: 'OK', payload: users });
})

router.post('/', (req, res) => {
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    CustomError.createError({
      name: 'User creation error',
      cause: generateUserError({ first_name, last_name, email }),
      message: 'Error creating user',
      code: ErrorList.INVALID_TYPE_ERROR
    })
  }

  const user = {
    first_name,
    last_name,
    email
  }

  user.id = users.lenght ? users[users.length - 1].id + 1 : 1;
  users.push(user);

  res.send({ status: 'OK', payload: user });
})

export default router;