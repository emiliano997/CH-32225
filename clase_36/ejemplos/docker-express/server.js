import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Hola desde docker jeje");
  res.send("Hola desde Docker");
});

app.get("/operacionSencilla", (req, res) => {
  let sum = 0;

  for (let i = 0; i < 1000; i++) {
    sum += i;
  }

  res.send({ sum });
});

app.get("/operacionCompleja", (req, res) => {
  let sum = 0;

  for (let i = 0; i < 5e8; i++) {
    sum += i;
  }

  res.send({ sum });
});

app.listen(3000, () =>
  console.log("Servidor corriendo en el puerto 3000. PID: ", process.pid)
);
