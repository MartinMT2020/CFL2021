/*
Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
*/

let readlineSync = require("readline-sync");
let arrLength = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arrNumeros = new Array(arrLength);


//cargar arr con valores elegidos por el usuario
for (i = 0; i < arrLength; i++) {
  arrNumeros[i] = readlineSync.questionInt("Ingrese un numero para la pos " + i + ": ");
}

//mostrar arreglo desde la ultima pos
for (i = arrLength - 1; i >= 0; i--) {
  console.log(arrNumeros[i]);
}




