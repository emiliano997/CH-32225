import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'App de Chat'
  })
})

export default router