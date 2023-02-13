import path from 'path'
import { fileURLToPath } from 'url'
import bcrypt from 'bcrypt';

// Hash Password
export const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

// Compare password
export const comparePassword = (user, password) => bcrypt.compareSync(password, user.password);

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default __dirname
