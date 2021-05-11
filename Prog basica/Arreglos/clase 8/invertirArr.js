let readlineSync = require("readline-sync");
let arrLength = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arrNumeros = new Array(arrLength);
let arrNumeros2 = new Array(arrLength);

//cargar arr con valores elegidos por el usuario
for (i = 0; i < arrLength; i++) {
  arrNumeros[i] = readlineSync.questionInt("Ingrese un numero para la pos " + i + ": ");
  arrNumeros2[i] = Math.floor(Math.random()*10);
}

//invertir arreglo haciendo swap
function invertirArreglo(arr){
    for (i = 0; i < arr.length / 2; i++) {
      let j = arr.length - 1 - i;
      let auxiliar = arr[i];
      arr[i] = arr[j];
      arr[j] = auxiliar;
    }
}
console.log(arrNumeros);
console.log(arrNumeros2);
invertirArreglo(arrNumeros2);
console.log(arrNumeros2);

