import path from 'path'
import { fileURLToPath } from 'url'
import bcrypt from 'bcrypt'

const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

export const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
export const comparePassword = (user, password) => bcrypt.compareSync(password, user.password)