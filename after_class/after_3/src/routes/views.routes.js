import { Router } from 'express';
import MovieDao from '../daos/movies.js';

const router = Router();

router.get('/', async (req, res) => {
  const movies = await MovieDao.getMovies()
  
  res.render('index', {
    title: 'Movies',
    movies
  })
})

router.get('/success', async (req, res) => {
  res.render('success')
});

router.get('/:id', async (req, res) => {
  try {
    const movie = await MovieDao.getMovieById(req.params.id);
    res.render('edit', {
      title: 'Edit Movie',
      movie: {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        id: movie._id
      }
    })

  } catch(error) {
    res.json({ error: error.message })
  }
})


router.get('/delete/:id', async (req, res) => {
  try {
    const movie = await MovieDao.deleteMovie(req.params.id);
    res.render('index', {
      title: 'Edit Movie',
      message: 'Movie deleted successfully'
    })

  } catch(error) {
    res.json({ error: error.message })
  }
})


export default router;