function calcularCosto(horaIngreso, horaSalida, ticketPerdido = false) {

    if (ticketPerdido) {
        return 80;
    }
  const [ingresoHoras, ingresoMinutos] = horaIngreso.split(":").map(Number);
  const [salidaHoras, salidaMinutos] = horaSalida.split(":").map(Number);

  // Convertimos ambas horas a minutos desde las 00:00
  let totalMinutosIngreso = ingresoHoras * 60 + ingresoMinutos;
  let totalMinutosSalida = salidaHoras * 60 + salidaMinutos;

  // Si la salida es "menor" que el ingreso, asumimos que cruzó de día
  if (totalMinutosSalida <= totalMinutosIngreso) {
    totalMinutosSalida += 24 * 60; // sumamos 24 horas
  }
  const diferenciaMinutos = totalMinutosSalida - totalMinutosIngreso;
  const totalHoras = Math.ceil(diferenciaMinutos / 60); // redondear hacia arriba

  // Determinar si es horario nocturno
  const esHorarioNocturno = (ingresoHoras >= 22 || salidaHoras < 6);
  const tarifa = esHorarioNocturno ? 6 : 10;
    // Aplicar tarifa máxima si excede las 5 horas
    if(totalHoras>5 && !esHorarioNocturno ) {
        return 50;
    }
  return totalHoras * tarifa;
 
}

export default calcularCosto;
