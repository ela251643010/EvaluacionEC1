
import  calcularCosto from "./estacionamiento.js";
describe ("Estacionamiento", () => {
    it ("Deberia calcular el costo del estacionamiento por hora", () => {
       expect(calcularCosto( '14:00', '16:00')).toEqual(20); 
    });
    it ("Deberia calcular las horas del estacionamiento", () => {
         expect(calcularCosto('14:00', '16:30')).toEqual(30);
     });
     it("Deberia calcular el precio de 6 bs si la hora es nocturna", () => {
        expect (calcularCosto('22:30','04:40')).toEqual(42);
     });
     it("Deberia calcular el precio maximo de 50 bs si se pasa de 5 horas", () => {
        expect (calcularCosto('10:00','16:30')).toEqual(50);
     });
     it("Deberia cobrar 80 bs si se pierde el ticket", () => {
        expect (calcularCosto('10:00','16:30', true)).toEqual(80);
     });
});