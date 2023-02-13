import passport from "passport";
import local from "passport-local";
import { userModel } from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils.js";

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "register",
    new LocalStrategy(
      {
        usernameField: "email",
        passReqToCallback: true,
      },
      async (req, username, password, done) => {
        const { first_name, last_name, email, age, role } = req.body;

        if (!first_name || !last_name || !email || !age || !password) {
          return done('All fields are required', false);
        }

        try {
          const user = await userModel.findOne({ email: username });

          if (user) {
            console.log("User already exists");
            return done(null, false);
          }

          const newUser = await userModel.create({
            first_name,
            last_name,
            email,
            age,
            password: hashPassword(password),
            role,
          });
          
          return done(null, newUser);
        } catch (error) {
          return done(`Error: ${error}`, false);
        }
      }
    )
  );

  // passport.use("restore")

  passport.use(
    "login",
    new LocalStrategy(
      {
        usernameField: "email",
      },
      async (username, password, done) => {
        try {
          const user = await userModel.findOne({ email: username });

          if (!user) {
            console.log("User not found");
            return done(null, false);
          }

          if (!comparePassword(user, password)) {
            console.log("Invalid password");
            return done(null, false);
          }

          return done(null, user);
        } catch (error) {
          return done(`Error: ${error}`, false);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  })
};

export default initializePassport;