let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("Indique un número: ");

let numDivisores = cantidadDeDivisores(numero);
console.log("El número", numero, "tiene ", numDivisores, "divisores.");


function cantidadDeDivisores(numero) {
  let cantidad = 0;
  let divisor;
  for (divisor = 0; divisor < numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      cantidad++;
    }
  }
  return cantidad;
}
function esMultiplo (numero, divisor) {
    return ((numero % divisor) == 0 );
    };