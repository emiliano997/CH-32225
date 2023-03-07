import postModel from '../models/post.model.js';

class PostServices {
  find() {
    return postModel.find();
  }
}

export default new PostServices();