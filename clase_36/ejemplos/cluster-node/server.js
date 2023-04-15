import cluster from "cluster";
import { cpus } from "os";
import express from "express";

// console.log('CPUs:', cpus().length);

const numCpus = cpus().length;

// console.log(cluster.isPrimary);

cluster.on('exit', (worker, code, signal) => {
  console.log('Worker', worker.process.pid, 'ha muerto');
  cluster.fork();
})

if (cluster.isPrimary) {
  console.log("Soy el proceso principal. PID:", process.pid);

  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }

  cluster.on("message", (worker, message) => {
    console.log("Mensaje recibido del worker", worker.process.pid, message);
  });
} else {
  // console.log('Soy un proceso secundario. PID: ', process.pid);

  const app = express();

  app.get("/", (req, res) => {
    res.send("Hola mundo. Soy el worker " + process.pid);
  });

  app.get("/primaryMessage", (req, res) => {
    cluster.emit("message", "Hola desde el worker " + process.pid);
    res.send("Mensaje enviado al proceso principal");
  });

  app.get("/operacionSencilla", (req, res) => {
    let sum = 0;

    for (let i = 0; i < 100000; i++) {
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
}
