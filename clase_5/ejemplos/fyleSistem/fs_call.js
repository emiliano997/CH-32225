const fs = require("fs");

fs.writeFile("./texto.txt", "Buenas noches", (error) => {
  if (error) { console.log("Error al escribir", error); }
  
  fs.readFile("./texto.txt", 'utf-8', (error, resultado) => {
    if (error) { console.log("Error al leer", error); }

    console.log(resultado);

    fs.appendFile("./texto.txt", "\nBuenos dias", (error) => {
      if (error) console.log("Error al escribir", error);

      fs.readFile("./texto.txt", 'utf-8', (error, resultado) => {
        if (error) console.log("Error al leer", error);

        console.log(resultado);

        fs.unlink("./texto.txt", (error) => {
          if (error) console.log("Error al borrar", error);
        });
      });
    });
  });
});
