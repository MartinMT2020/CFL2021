let readlineSync = require("readline-sync");
let base = readlineSync.questionInt("Ingrese un numero: ");
let exponente = readlineSync.questionInt("Ingrese un numero >= 0: ");

while (exponente < 0) {
  exponente = readlineSync.questionInt("Ingrese un numero >= 0: ");
}

function calcularPotencia(base, exponente) {
  return base ** exponente;
};

let potencia = calcularPotencia(base, exponente);
console.log(
  "El resultado de elevar " + base + " a la " + exponente + " es: " + potencia
);
