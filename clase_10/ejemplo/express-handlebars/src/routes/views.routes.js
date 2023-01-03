import { application, Router } from "express";

const router = Router();

router.get('/bands', (req, res) => {
  const bands = [
    { name: 'For Today' },
    { name: 'Metallica'},
    { name: 'Coldplay'},
    { name: 'Hillsong'}
  ]

  res.render('bands', {
    title: 'Bands',
    bands,
    style: 'styles.css'
  })
});

export default router;