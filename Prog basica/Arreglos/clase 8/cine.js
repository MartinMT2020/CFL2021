let readlineSync = require("readline-sync");
let capacidad = readlineSync.questionInt("Determine la capacidad de la sala : ");
let sala = new Array(capacidad);
cargarOcupacionAleatoria(sala, capacidad);
console.log(sala);
butacasVacias = contarButacasVacias(sala);
console.log("La cantidad de asientos vacios es de : " + butacasVacias);

function cargarOcupacionAleatoria(v, capacidad) {
  for (let i = 0; i < capacidad; i++) {
    let butaca = Math.floor(Math.random() * (capacidad/1.23) + 1);
    if (butaca % 2 == 0) {
      v[i] = true;
    } else {
      v[i] = false;
    }
  }
}

function contarButacasVacias(v) {
  let contador = 0;
  for (let i = 0; i < v.length; i++) {
    if (v[i] != true) {
      contador++;
    }
  }
  return contador;
}
