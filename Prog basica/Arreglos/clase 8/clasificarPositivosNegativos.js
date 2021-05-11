/*
• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay
*/

let readlineSync = require("readline-sync");
let arrLength = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arrNumeros = new Array(arrLength);
let i;
let cantPositivos = 0;
let cantNegativos = 0;
let cantCeros = 0;
for (i = 0; i < arrLength; i++) {
    arrNumeros[i] = readlineSync.questionInt("Ingrese un numero para la pos " + i + ": ");
  }
for (i = 0; i < arrLength; i++) {
    if (arrNumeros[i] > 0){
        cantPositivos++
    } else if (arrNumeros[i] === 0){
        cantCeros++

    }else{
        cantNegativos++;
    } 
}
console.log("La cantidad de numeros positivos es de "+cantPositivos+" , la de negativos es "+cantNegativos+" , y la de ceros es "+cantCeros);