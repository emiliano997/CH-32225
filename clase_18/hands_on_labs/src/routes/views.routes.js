import { Router } from "express";
import userModel from "../models/users.js";

const router = Router();

router.get('/users', async (req, res) => {
  const { page } = req.query
  const users = await userModel.paginate({}, { page: page || 1, limit: 10 });
  res.render('users',{
    users,
    title: 'Users'
  });
});

export default router;