class TicketManager {
  #precioBaseDeGanancia = 1.15;

  constructor() {
    this.eventos = [];
  }

  getEventos() {
    return this.eventos;
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    let evento = {
      nombre,
      lugar,
      precio: precio * this.#precioBaseDeGanancia,
      capacidad: capacidad || 50,
      fecha,
      participantes: [],
    };

    if (this.eventos.length === 0) {
      evento["id"] = 1;
    } else {
      evento["id"] = this.eventos[this.eventos.length - 1]["id"] + 1;
    }

    this.eventos.push(evento);
  }

  agregarUsuario(idEvento, idUsuario) {
    let response;
    for (let i = 0; i < this.eventos.length; i++) {
      if (this.eventos[i].id === idEvento) {
        if (this.eventos[i].participantes.includes(idUsuario)) {
          response = "El usuario ya se encuentra en la lista";
          break;
        }

        this.eventos[i].participantes.push(idUsuario);
        response = "Usuario agregado";
        break;
      }
    }
    return response;
  }
  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    let evento = this.eventos.filter((ev) => ev.id === idEvento);
    let nuevoId = this.eventos[this.eventos.length - 1]["id"] + 1;
    let nuevoEvento = {
      id: nuevoId,
      lugar: nuevaLocalidad,
      fecha: nuevaFecha,
      participantes: [],
    };

    this.eventos.push({ ...evento[0], ...nuevoEvento });
    console.log("El evento se puso en gira");
  }
}

const ticket = new TicketManager();
let fecha = new Date();
ticket.agregarEvento("Avengers", "Cinemark", 500, 30, fecha);
ticket.agregarEvento("Ultron", "Cinepolis", 5000);

ticket.agregarUsuario(1, 1);
ticket.agregarUsuario(1, 64);
ticket.agregarUsuario(1, 64);
ticket.agregarUsuario(1, 6);

console.log(ticket.getEventos());

ticket.ponerEventoEnGira(2, "Village Cines", new Date().toLocaleDateString());

console.log(ticket.getEventos());
