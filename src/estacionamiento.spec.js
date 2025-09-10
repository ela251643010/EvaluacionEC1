
import { calcularCosto,calcularHoras } from "./estacionamiento.js";
describe ("Estacionamiento", () => {
    it ("Deberia calcular el costo del estacionamiento por hora", () => {
       expect(calcularCosto((0.5))).toEqual(5); 
    });
    it ("Deberia calcular las horas del estacionamiento", () => {
         expect(calcularHoras('14:00', '16:30')).toEqual(3);
     });
});