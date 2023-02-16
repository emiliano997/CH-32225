import passport from "passport";

export const passportCall = (strategy) => {
  return async (req, res, next) => {
    passport.authenticate(strategy, function(err, user, info) {
      if(err) return next(err);

      if(!user) return res.status(401).json({ message: info.messages ? info.messages : info.toString() })

      console.log(user)
      req.user = user
      next()
    })(req, res, next)
  }
}

export const authorization = (role) => {
  return async (req, res, next) => {
    if(!req.user) {
      return res.status(401).json({ message: 'Not logged in' })
    }
    let permiso = false
    role.forEach(rol => {
      if(req.user.role === rol) {
        permiso = true
      }
    })

    next()
  }
}