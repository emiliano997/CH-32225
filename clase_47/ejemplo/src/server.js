import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/payment.routes.js";

const app = express();

app.use(cors());

app.use("/api/payments", paymentRoutes);

app.use("*", (req, res) => {
  console.log("404");
  console.log(req.method);
  console.log(req.url);
  res.send("404");
});
app.listen(8080, () => console.log("Server on port 8080"));
