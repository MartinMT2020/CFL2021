/*
• Diseñar un algoritmo que
lea números enteros hasta
teclear 0
• Determinar y mostrar el
máximo, el mínimo y la
media de todos los
números ingresados
• Pensar cuidadosamente
cómo debemos inicializar
las variables
*/

let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('ingrese un numero entero distinto de 0, o este para salir');
let max = numero;
let min = numero;
let cantTotalNum = 0;
let suma = 0;
let promedio = 0;
console.log("numero:" + numero);

while (numero != 0) {
    suma += numero;
    numero = readlineSync.questionInt('ingrese un numero entero distinto de 0, o este para salir');
    console.log("numero:" + numero);
    cantTotalNum++
    if (numero > max) {
        max = numero
    } else if (numero < min) {
        min = numero
    }
}
promedio = suma / cantTotalNum;
console.log("el maximo valor ingresado por el usuario es el: " + max + " y el valor minimo es el " + min +
    "\n y el promedio de todos los numeros ingresados es " + promedio);