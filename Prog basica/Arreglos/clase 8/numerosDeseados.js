/*
• Construya un algoritmo que tenga un arreglo de
dimensión 5 y llénelo con los números que el usuario
desee
• Muestre los números del arreglo al usuario
*/

let readlineSync = require("readline-sync");

let arrNumDeseados = new Array(5);
let i;
for (i = 0; i < 5; i++) {
  let numero = readlineSync.questionInt("Ingrese un numero: ");
  arrNumDeseados[i] = numero;
}

for (i = 0; i < 5; i++) {
  console.log("El numero en pos "+i+" es "+arrNumDeseados[i]);
}
