/* Métodos
Ejercicio: Divisores
• Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Reutilice el método esMultiplo implementado para el ejercicio
anterior */

let readlineSync = require("readline-sync");
let N = readlineSync.questionInt("Ingrese un numero: ");

function esMultiplo(N, i) {
  if (N % i == 0) {
    return true;
  }
  return false;
}

function cantidadDeDivisores(N) {
  let cantidadDivisores = 0;
  for (let i = N; i >= 1; i--) {
    console.log(i);
    let multiplo = esMultiplo(N, i);
    console.log(multiplo);
    if (multiplo == true) {
      cantidadDivisores++;
    }
    console.log("cantidadDivisores", cantidadDivisores);
  }
  return cantidadDivisores;
}

let cantidadDivisores = cantidadDeDivisores(N);
console.log("La cantidad de divisores del numero " + N + " es:" + cantidadDivisores);
