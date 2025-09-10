
import  calcularCosto, { calcularHoras } from "./estacionamiento.js";
describe ("Estacionamiento", () => {
    it ("Deberia calcular el costo del estacionamiento por hora", () => {
       expect(calcularCosto((2))).toEqual(20); 
    });
    
});