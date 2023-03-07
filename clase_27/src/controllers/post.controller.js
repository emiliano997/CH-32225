import postValidator from "../validators/post.validator.js";

class PostController {
  async getPosts(req, res) {
    try {
      const posts = await postValidator.getPosts()
      res.json(posts);
    } catch (error) {
      res.json(error.message);
    }
  }
}

export default new PostController();