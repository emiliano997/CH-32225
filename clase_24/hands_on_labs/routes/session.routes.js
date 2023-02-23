import jwt from "jsonwebtoken";
import Router from "./router.js";

export default class SessionRouter extends Router {
  init() {
    this.get('/')
    this.post('/login', ['PUBLIC'], this.login)
  }

  login(req, res) {
    const user = {
      email: req.body.email,
      role: 'USER'
    }

    const token = jwt.sign(user, 'secretCoder')
    res.sendSuccess({ token })
  }
}