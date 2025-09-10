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
 const fechaForm = document.querySelector("#parqueo-form");
 const div = document.querySelector("#resultado-div");
 const boton = document.querySelector("#Enviar-Button");
 fechaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const [anio,mes,dia] = fechaIngreso.value.split("-");
  const fechaOficial = `${dia}/${mes}/${anio}`;
  div.innerHTML = "<p>" +"La fecha de ingreso es:"  + fechaOficial + "</p>";
 });