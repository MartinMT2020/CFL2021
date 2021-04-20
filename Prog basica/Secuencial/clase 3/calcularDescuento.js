let readlineSync = require('readline-sync');
let precioInicial = readlineSync.question('defina el precio inicial del producto');
let descuentoAbsoluto = readlineSync.question('defina el valor absoluto del descuento');
let divisorPorcentual = 100;
let descuentoPorcentual = descuentoAbsoluto/divisorPorcentual;
let descuentoNeto = precioInicial*descuentoPorcentual;
let precioFinal = (precioInicial-descuentoNeto);
console.log(precioFinal);