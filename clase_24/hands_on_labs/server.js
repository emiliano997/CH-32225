import express from "express";
import UserRoutes from "./routes/user.routes.js";
import SessionRoutes from "./routes/session.routes.js";

const userRouter = new UserRoutes();
const sessionRouter = new SessionRoutes();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter.getRouter());
app.use('/sessions', sessionRouter.getRouter());

app.listen(3000, () => console.log("Server running on port 3000"));
