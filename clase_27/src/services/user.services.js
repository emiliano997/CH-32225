import userModel from '../models/user.model.js'

class UserServices {
  find() {
    return userModel.find()
  }

  create(name, email, password) {
    return userModel.create({ name, email, password })
  }

  delete(id) {
    return userModel.findByIdAndDelete(id)
  }
}

export default new UserServices()