import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const isSession = req.session.user ? false : true;
  res.render("index", {
    title: "Home",
    message: req.flash("success"),
    isSession
  });
});

router.get("/login", (req, res) => {
  if(req.session.user) {
    return res.redirect('/profile')
  }
  res.render("login", { title: "Login", message: req.flash("message")});
});

router.get("/register", (req, res) => {
  res.render("register", { title: "Register", error: req.flash("error")  });
});

router.get("/profile", (req, res) => {
  if (!req.session.user) {
    req.flash("message", "You must be logged in");
    return res.redirect("/login");
  }
  res.render("profile", { title: "Profile", user: req.session.user, message: req.flash("success") });
});

export default router;
