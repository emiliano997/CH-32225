import { Router } from "express";
import passport from "passport";

const router = Router();

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get('/githubcallback', passport.authenticate('github', { failureredirect: '/login' }), (req, res) => {
  req.session.user = req.user
  res.redirect('/');
});

export default router;