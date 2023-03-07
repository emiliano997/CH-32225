import { Router } from 'express';
import postController from '../controllers/post.controller.js';

const router = Router();

router.get('/', postController.getPosts);

export default router;