 export function mostrarResultado(desglose) {
 let resultadoHTML = "<h3>Desglose:</h3><ul>";

  desglose.forEach(item => {
    if (item.descripcion) {
      resultadoHTML += `<li><strong>${item.descripcion}</strong>: Bs ${item.subtotal}</li>`;
    } else {
      const [year, month, day] = item.fecha.split("-");
      const fechaFormateada = `${day}/${month}/${year}`;
      resultadoHTML += `<li>Día ${item.dia} (${fechaFormateada}): ${item.horas}h x Bs ${item.tarifa} = Bs ${item.subtotal}</li>`;
    }
  });
  
  const total = desglose.reduce((sum, item) => sum + item.subtotal, 0);

  resultadoHTML += `</ul><h3>Total a pagar: Bs ${total}</h3>`;
  return resultadoHTML;
}