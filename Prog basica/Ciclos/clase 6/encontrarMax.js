/*
• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo
*/

let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('ingrese un numero entero distinto de 0, o este para salir');
console.log("numero:" + numero);
let max = numero;

while (numero != 0) {
    numero = readlineSync.questionInt('ingrese un numero entero distinto de 0, o este para salir');
    console.log("numero:" + numero);
    if (numero > max) {
        max = numero
    }
}
console.log("el maximo valor ingresado por el usuario es el: "+max);