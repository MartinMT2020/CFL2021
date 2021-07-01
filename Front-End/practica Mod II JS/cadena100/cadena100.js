/* 2_ Genere una cadena con los números del 1 al 100 (usando ciclos), 
y agreguelos mediante Javascript al cuerpo de la página al presionar un botón. */

"use strict";

function main() {
  let largo = 100;
  let cadena = new Array(largo);
  cargarCadena(cadena, largo);
  let mostrar = document.getElementById("btn");
  mostrar.addEventListener("click", function () {
    mostrarCadena(cadena);
  });
}

function cargarCadena(v, dimension) {
  for (let i = 0; i < dimension; i++) {
    v[i] = i + 1;
  }
}

function mostrarCadena(v) {
  let rectaNum = v.toString();
  let parrafo = document.getElementById("texto");
  parrafo.innerHTML = rectaNum;
}

main();
