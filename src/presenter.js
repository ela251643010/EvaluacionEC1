import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
/*
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.  value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});*/
 const fechaIngreso = document.querySelector("#fecha-ingresada");
 const fechaSalida = document.querySelector("#fecha-salida");
 const fechaForm = document.querySelector("#parqueo-form");
 const div = document.querySelector("#resultado-div");
 const boton = document.querySelector("#Enviar-Button");
 fechaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const [anio,mes,dia] = fechaIngreso.value.split("-");
  const fechaOficial = `${dia}/${mes}/${anio}`;
  const [anio2,mes2,dia2] = fechaSalida.value.split("-");
  const fechaOficial2 = `${dia2}/${mes2}/${anio2}`;
  div.innerHTML = "<p>" +"La fecha de ingreso es:"  + fechaOficial + "</p>"+ "<br>" + "<p>" +"La fecha de salida es:"  + fechaOficial2 + "</p>";
 });