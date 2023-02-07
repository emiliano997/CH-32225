import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { userModel } from "./models/user.model.js";
import viewsRoutes from "./routes/views.routes.js";
import sessionRoutes from "./routes/session.routes.js";
import __dirname from "./dirname.js";
import handlebars from "express-handlebars";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

const app = express();

// Server config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/coderhouse",
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      ttl: 60,
    }),
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,
  })
);

mongoose.connect("mongodb://localhost:27017/coderhouse")
  .then(() => console.log("Connected to MongoDB"))

// Handlebars config
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

// Routes
app.use("/", viewsRoutes);
app.use("/session", sessionRoutes);
// app.get('*', (req, res) => { res.status(404).send('404 not found') })

// Server start
app.listen(3000, () => console.log("Server running on port 3000"))