"use strict";
let readlineSync = require("readline-sync");
let arrLength = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arrNumeros = new Array(arrLength);
let arrNumeros2 = new Array(arrLength);

//cargar arr con valores elegidos por el usuario
for (let i = 0; i < arrLength; i++) {
  arrNumeros[i] = readlineSync.questionInt(
    "Ingrese un numero para la pos " + i + ": "
  );
  arrNumeros2[i] = Math.floor(Math.random() * 10);
}

//invertir arreglo haciendo swap (variable "dinamica")
function invertirArreglo(arr) {
  let auxiliar;
  for (let i = 0; i < arr.length / 2; i++) {
    let j = arr.length - 1 - i;
    auxiliar = arr[i];
    arr[i] = arr[j];
    arr[j] = auxiliar;
  }
}
console.log(arrNumeros);
console.log(arrNumeros2);
invertirArreglo(arrNumeros2);
console.log(arrNumeros2);

//invertir arreglo haciendo swap (variante)
function invertirVector(v, cantidad) {
  let indiceIzq = 0;
  let indiceDer = cantidad - 1;
  let aux;
  while (indiceIzq < indiceDer) {
    aux = v[indiceIzq];
    v[indiceIzq] = v[indiceDer];
    v[indiceDer] = aux;
    indiceIzq++;
    indiceDer--;
  }
}
console.log(arrNumeros2);
invertirVector(arrNumeros2, arrLength);
console.log(arrNumeros2);
