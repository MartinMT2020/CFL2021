/* 
• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/

let readlineSync = require("readline-sync");
let dimensionArr = 6;
let arrNum1 = new Array(dimensionArr);
let arrNum2 = new Array(dimensionArr);
let arrSuma = new Array(dimensionArr);

for (i = 0; i < dimensionArr; i++) {
  arrNum1[i] = readlineSync.questionInt("Ingrese un numero para la pos " + i + " del arreglo 1: ");
  arrNum2[i] = readlineSync.questionInt("Ingrese un numero para la pos " + i + " del arreglo 2: ");
  arrSuma[i] = arrNum1[i] + arrNum2[i];
}

for (i = 0; i < dimensionArr; i++) {
  console.log("La suma del V1 + el V2 es: " + arrNum1[i] + " + " + arrNum2[i] + " = " + arrSuma[i]);
}
console.log("El vector suma es = " + arrSuma);
