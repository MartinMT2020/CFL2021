/* Hacer una aplicación web que al apretar un botón
simule el lanzamiento de dos dados 1000 veces,
sumarlos y muestre en el HTML la cantidad de
veces que salió 7. */

"use strict";

let btnLanzar = document.getElementById("lanzar");
btnLanzar.addEventListener("click", () => {
  let contador = 0;
  for (let i = 0; i < 1000; i++) {
    let dado1 = lanzarDados();
    console.log("dado1", dado1);
    let dado2 = lanzarDados();
    console.log("dado2", dado2);
    let resultado = dado1 + dado2;
    console.log("resultado", resultado);
    contador = contarOcurrencia(resultado, contador);
    console.log("contador", contador);
  }
  let mostrar = document.getElementById("veces");
  mostrar.innerHTML = contador;
});

function lanzarDados() {
  return Math.floor(Math.random() * 6) + 1;
}

function contarOcurrencia(num, contador) {
  if (num === 7) {
    contador++;
  }
  return contador;
}
