  function calcularHoras(horaInicio, horaFin) {
    const [h1, m1] = horaInicio.split(":").map(Number);
    const [h2, m2] = horaFin.split(":").map(Number);

    let inicio = h1 * 60 + m1;
    let fin = h2 * 60 + m2;

    if (fin <= inicio) {
      fin += 24 * 60;
    }

    const diffMin = fin - inicio;
    return Math.ceil(diffMin / 60);
  }

  function calcularTotal(fechaIngreso, fechaSalida, horaIngreso, horaSalida, ticketPerdido = false) {
    const desglose = [];

    // Si el ticket se perdió, solo devolvemos la multa
    if (ticketPerdido) {
      desglose.push({
        multa: true,
        descripcion: "Multa por ticket perdido",
        subtotal: 80
      });
      return desglose;
    }

    const fechaIn = new Date(fechaIngreso);
    const fechaOut = new Date(fechaSalida);

   // const diasTotales = Math.ceil((fechaOut - fechaIn) / (1000 * 60 * 60 * 24)) || 1;
   const diffTime = fechaOut.getTime() - fechaIn.getTime();
   const diasTotales = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;


    for (let i = 0; i < diasTotales; i++) {
      const fechaActual = new Date(fechaIn);
      fechaActual.setDate(fechaActual.getDate() + i);

      let horas = 0;
      let tarifa = 10;
      let esNocturno = false;

      if (diasTotales === 1) {
        horas = calcularHoras(horaIngreso, horaSalida);
        const [hIn] = horaIngreso.split(":").map(Number);
        const [hOut] = horaSalida.split(":").map(Number);
        esNocturno = (hIn >= 22 || hOut < 6);
      } else if (i === 0) {
        horas = calcularHoras(horaIngreso, "23:59");
        const [hIn] = horaIngreso.split(":").map(Number);
        esNocturno = (hIn >= 22);
      } else if (i === diasTotales - 1) {
        horas = calcularHoras("00:00", horaSalida);
        const [hOut] = horaSalida.split(":").map(Number);
        esNocturno = (hOut < 6);
      } else {
        horas = 24;
        esNocturno = false; // por simplicidad, días intermedios no se consideran nocturnos
      }

      tarifa = esNocturno ? 6 : 10;
      let subtotal = horas * tarifa;

      // Tope de Bs. 50 solo si no es nocturno
      if (horas > 5 && !esNocturno) {
        subtotal = 50;
      }

      desglose.push({
        dia: i + 1,
      
        fecha: fechaActual.toISOString().split("T")[0], // Devuelve "YYYY-MM-DD"

        horas,
        tarifa,
        subtotal
      });
    }

    return desglose;
  }

  export default calcularTotal;
