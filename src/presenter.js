import  calcularCosto from "./estacionamiento.js";

 const fechaIngreso = document.querySelector("#fecha-ingresada");
 const fechaSalida = document.querySelector("#fecha-salida");
 const horaIngreso = document.querySelector("#hora-ingreso");
 const horaSalida = document.querySelector("#hora-salida");
 const ticket = document.querySelector("#ticketPerdido");
 const fechaForm = document.querySelector("#parqueo-form");
 const div = document.querySelector("#resultado-div");
 fechaForm.addEventListener("submit", (event) => {
  event.preventDefault();

   if (!horaIngreso || !horaSalida) {
    div.innerHTML = "<p>Por favor ingresa ambas horas.</p>";
    return;
  }
  // const horas = calcularHoras(horaIngreso.value, horaSalida.value);
  const costo = calcularCosto(horaIngreso.value, horaSalida.value);
  div.innerHTML = `<p>Total a pagar:  $ ${costo}</p>`;
 });