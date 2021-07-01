"use strict";
let readlineSync = require("readline-sync");
let N = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let v1 = new Array(N);
let v2 = new Array(N);
cargarVector(v1, N);
cargarVector(v2, N);
let prodEscalar = calcularProdEscalar(v1, v2);
console.log("Este es el vector 1");
mostrarVector(v1, N);
console.log("Este es el vector 2");
mostrarVector(v2, N);
console.log("El producto escalar de "+ v1 + " * "+ v2 +" es = " + prodEscalar);

function cargarVector(v, cantidad) {
  let indice;
  for (indice = 0; indice < cantidad; indice++) {
    v[indice] = Math.floor(Math.random() * 50);
  }
}

function mostrarVector(v, cantidad) {
  let indice;
  for (indice = 0; indice < cantidad; indice++) {
    console.log("["+v[indice]+"]"+" ");
  }
}

function calcularProdEscalar(v1, v2) {
  let i;
  let producto = 0;
  for (i = 0; i < v1.length; i++) {
    producto += v1[i] * v2[i];
  }
  return producto;
}
