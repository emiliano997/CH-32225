import passport from "passport";
import GitHubStrategy from "passport-github2";
import { userModel } from "../models/User.js";

const clientId = 'adasdd'
const clientSecret = 'asdasd'

const initializaPassport = () => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: clientID,
        clientSecret: clientSecret,
        callbackURL: "http://localhost:3000/api/sessions/githubcallback",
        scope: "user:email"
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log(profile);

          const user = await userModel.findOne({
            email: profile.emails[0].value,
          });

          if (!user) {
            const [first_name, last_name] = profile._json.name.split(" ");
            const newUser = {
              first_name,
              last_name,
              email: profile.emails[0].value,
              password: "",
              age: null,
            }

            // await newUser.save()
            const savedUser = await userModel.create(newUser);

            done(null, newUser);
          } else {
            done(null, user);
          }
        } catch (error) {
          done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id);
    done(null, user);
  });
};

export default initializaPassport;