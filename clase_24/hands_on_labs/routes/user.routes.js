import Router from "./router.js";

export default class UserRouter extends Router {
  init() {
    this.get('/', ['PUBLIC'], this.getAllUsers);
    this.get('/currentUser', ['USER', 'USER_PREMIUM'], (req, res) => {
      res.sendSuccess(req.user);
    });
  }

  getAllUsers(req, res) {
    res.sendSuccess('All users');
  }

}