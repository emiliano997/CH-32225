import passport from 'passport';
import jwt from 'passport-jwt';

const JWTStrategy = jwt.Strategy;
const ExctractJWT = jwt.ExtractJwt

const initializePassport = () => {
  passport.use(
    'jwt',
    new JWTStrategy({
      jwtFromRequest: ExctractJWT.fromExtractors([cookieExtractor]),
      secretOrKey: 'coderSecret'
    }, 
    async (jwt_payload, done) => {
      try {
        return done(null, jwt_payload)
      } catch (error) {
        return done(error)
      }
    }
    )
  )
}

const cookieExtractor = (req) => {
  let token = null;
  console.log(req.cookies)
  if(req && req.cookies) {
    token = req.cookies["token"]
  }
  return token
}

export default initializePassport