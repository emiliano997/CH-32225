import { Router } from "express";

const router = Router();

const isSession = (req, res, next) => {
  if (req.session.user) {
    return res.redirect('/profile');
  }

  next()
}

router.get('/', (req, res) => {
  res.redirect('/login');
})

router.get('/restore', isSession, (req, res) => {
  res.render('restore');
})

router.get('/login', isSession, (req, res) => {
  res.render('login');
})

router.get('/register', isSession, (req, res) => {
  res.render('register');
})

router.get('/profile', (req, res) => {
  if(!req.session.user) {
    return res.redirect('/login');
  }
  res.render('profile', { user: req.session.user });
})

export default router;