function calcularHoras(horaIngreso, horaSalida) {
  const [ingresoHoras, ingresoMinutos] = horaIngreso.split(":").map(Number);
  const [salidaHoras, salidaMinutos] = horaSalida.split(":").map(Number);

  let horasTotales = salidaHoras - ingresoHoras;
  let minutosTotales = salidaMinutos - ingresoMinutos;

  if (minutosTotales < 0) {
    minutosTotales += 60;
    horasTotales -= 1;
  }

  const total = horasTotales + (minutosTotales / 60);
  return Math.ceil(total); // Redondear hacia arriba por fracción de hora
}
function calcularCosto(horas) {
    const costoPorHora = 10;
    return horas * costoPorHora;
}
export { calcularCosto, calcularHoras };