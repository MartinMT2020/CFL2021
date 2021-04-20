let readlineSync = require('readline-sync');
let precioUnitario = readlineSync.questionFloat('ingrese el precio del producto');
let cantidad = readlineSync.questionInt('ingrese la cantidad del producto');
let mes = readlineSync.questionInt('ingrese el numero de mes corriente');
let precioFinal = precioUnitario * cantidad;
let descuento = precioFinal * 0.15;
if (mes == 10) {
    precioFinal = precioFinal - descuento;
}
console.log("El costo de su compra es de "+precioFinal+" pesos");
