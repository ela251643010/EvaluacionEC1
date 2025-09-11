  import calcularCosto from "./estacionamiento.js";
  import { mostrarResultado } from "./view.js";

  const fechaIngreso = document.querySelector("#fecha-ingresada");
  const fechaSalida = document.querySelector("#fecha-salida");
  const horaIngreso = document.querySelector("#hora-ingreso");
  const horaSalida = document.querySelector("#hora-salida");
  const ticket = document.querySelector("#ticketPerdido");
  const fechaForm = document.querySelector("#parqueo-form");
  const div = document.querySelector("#resultado-div");

  fechaForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!horaIngreso.value || !horaSalida.value || !fechaIngreso.value || !fechaSalida.value) {
      div.innerHTML = "<p>Por favor completa todos los campos.</p>";
      return;
    }

    const ticketPerdido = ticket.value === "si";

    const desglose = calcularCosto(
      fechaIngreso.value,
      fechaSalida.value,
      horaIngreso.value,
      horaSalida.value,
      ticketPerdido
    );

    div.innerHTML = mostrarResultado(desglose);  
  });
