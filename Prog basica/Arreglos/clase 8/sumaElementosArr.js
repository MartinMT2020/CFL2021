let readlineSync = require("readline-sync");
let length = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arrNumeros = new Array(length);
let i;
let suma = 0;

for (i = 0; i < length; i++) {
    arrNumeros[i] = readlineSync.questionInt("Ingrese un numero para la pos "+i+": ");
}
for (i = 0; i < length; i++) {
    suma += arrNumeros[i];
}
console.log("El resultado de la suma de los valores del arr es = "+suma);