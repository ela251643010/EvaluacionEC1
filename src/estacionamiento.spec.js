import calcularTotal from "./estacionamiento";

describe("Estacionamiento", () => {
  it("Debería calcular el costo del estacionamiento por hora", () => {
    const resultado = calcularTotal("2025-09-10", "2025-09-10", "14:00", "16:00");
    const total = resultado.reduce((sum, item) => sum + item.subtotal, 0);
    expect(total).toEqual(20);
  });

  it("Debería calcular las horas del estacionamiento", () => {
    const resultado = calcularTotal("2025-09-10", "2025-09-10", "14:00", "16:30");
    const total = resultado.reduce((sum, item) => sum + item.subtotal, 0);
    expect(total).toEqual(30);
  });

  it("Debería calcular el precio de Bs 6 si la hora es nocturna", () => {
    const resultado = calcularTotal("2025-09-10", "2025-09-11", "22:30", "04:40");
    const total = resultado.reduce((sum, item) => sum + item.subtotal, 0);
    expect(total).toEqual(42); // 7h * Bs 6 = 42
  });

  it("Debería calcular el precio máximo de Bs 50 si se pasa de 5 horas", () => {
    const resultado = calcularTotal("2025-09-10", "2025-09-10", "10:00", "16:30");
    const total = resultado.reduce((sum, item) => sum + item.subtotal, 0);
    expect(total).toEqual(50); // Tope aplicado
  });

  it("Debería cobrar Bs 80 si se pierde el ticket", () => {
    const resultado = calcularTotal("2025-09-10", "2025-09-10", "10:00", "16:30", true);
    expect(resultado.length).toBe(1);
    expect(resultado[0].multa).toBe(true);
    expect(resultado[0].subtotal).toBe(80);
  });
  it("Debería calcular correctamente el total para varios días", () => {
  const resultado = calcularTotal("2025-09-10", "2025-09-12", "08:00", "10:00");
  const total = resultado.reduce((sum, item) => sum + item.subtotal, 0);
  // Día 1: 16h x 10 = 50 (tope), Día 2: 24h x 10 = 50 (tope), Día 3: 10h x 10 (tope contando con la noche) = 50
  expect(total).toBe(150);
 });
 it("Debería calcular correctamente un día intermedio completo", () => {
  const resultado = calcularTotal("2025-09-10", "2025-09-12", "22:00", "04:00");
  const total = resultado.reduce((sum, item) => sum + item.subtotal, 0);
  // Día 1: desde 22:00 hasta 23:59 → 2h x 6 = 12
  // Día 2: día completo → 24h x 10 = 50 (tope)
  // Día 3: desde 00:00 hasta 04:00 → 4h x 6 = 24
  expect(total).toBe(86);
});
it("Debería calcular correctamente al cruzar la medianoche", () => {
  const resultado = calcularTotal("2025-09-10", "2025-09-10", "23:00", "02:00");
  const total = resultado.reduce((sum, item) => sum + item.subtotal, 0);
  // 3h x 6 = 18
  expect(total).toBe(18);
});


});
