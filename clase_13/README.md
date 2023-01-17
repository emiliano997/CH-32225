# Comandos
- show collections
- show dbs
- use <nombre_db>

      db.estudiantes.insertMany([
        { nombre: "Emi", apellido: "Perez", curso: "A1", correo: "emi@gmail.com" },
        { nombre: "Jonas", apellido: "Zarate", curso: "A1", correo: "jonas@gmail.com" },
        { nombre: "Ezequiel", apellido: "Coletta", curso: "B1", correo: "eze@gmail.com" }
      ])

- db.estudiantes.find()