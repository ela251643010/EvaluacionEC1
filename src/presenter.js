import calcularCosto from "./estacionamiento.js";

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

  // Llamar a la función con fechas y horas
  const desglose = calcularCosto(
    fechaIngreso.value,
    fechaSalida.value,
    horaIngreso.value,
    horaSalida.value,
    ticketPerdido
  );

  // Calcular el total
  const total = desglose.reduce((sum, item) => sum + item.subtotal, 0);

  // Construir HTML del desglose
  let resultadoHTML = "<h3>Desglose:</h3><ul>";

  desglose.forEach(item => {
    if (item.descripcion) {
      resultadoHTML += `<li><strong>${item.descripcion}</strong>: Bs ${item.subtotal}</li>`;
    } else {
      resultadoHTML += `<li>Día ${item.dia} (${item.fecha}): ${item.horas}h x Bs ${item.tarifa} = Bs ${item.subtotal}</li>`;
    }
  });

  resultadoHTML += `</ul><h3>Total a pagar: Bs ${total}</h3>`;
  div.innerHTML = resultadoHTML;
});
