import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.routes.js";
import config from "./config/config.js";

const app = express();

// Settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", true);
mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("DB is connected"))
  .catch((err) => console.error(err));

// Routes
app.use('/api', routes);

app.listen(config.PORT, () => console.log('Server on port', config.PORT))
