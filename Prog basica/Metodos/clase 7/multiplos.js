let readlineSync = require("readline-sync");
let num1 = readlineSync.questionInt("Ingrese un numero: ");
let num2 = readlineSync.questionInt("Ingrese un numero: ");

function esMultiplo(num1, num2) {
  if (num1 % num2 == 0) {
    return true;
  } return false
}

let multiplo = esMultiplo(num1, num2);

if (multiplo == true) {
  console.log(num1 + " es multiplo de " + num2);
} else console.log(num1 + " NO es multiplo de " + num2);
