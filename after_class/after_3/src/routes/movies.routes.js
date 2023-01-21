import { Router } from "express";
import movieDao from '../daos/movies.js'

const router = Router();

router.get('/', async (req, res) => {
  try {
    const movies = await movieDao.getMovies()
    res.json(movies)
  } catch(error) {
    res.json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const movie = await movieDao.createMovie(req.body)
    // res.json(movie)
    res.redirect('/')
  } catch(error) {
    res.json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const movie = await movieDao.updateMovie(req.params.id, req.body)
    res.json(movie)
  } catch(error) {
    res.json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const movie = await movieDao.deleteMovie(req.params.id)
    res.json(movie)
  } catch(error) {
    res.json({ error: error.message })
  }
})

export default router;