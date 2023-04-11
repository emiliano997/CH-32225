import bcrypt from 'bcrypt';

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const passwordValidator = (user, password) => bcrypt.compareSync(password, user.password)