import postServices from '../services/post.services.js';

class PostValidator {
  async getPosts() {
    try {
      const posts = await postServices.find();
      return posts;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new PostValidator();