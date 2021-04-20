let readlineSync = require('readline-sync');
let sueldoActual = readlineSync.questionFloat('ingrese el valor de su sueldo actual');
let factorAumento1 = 0.05;
let factorAumento2 = 0.1;
let factorAumento3 = 0.2;
let rangoMenor = 15001;
let rangoMedio = 20001;
let rangoMayor = 25000;
let sueldoFinal = sueldoActual;
if ((sueldoActual > 0) && (sueldoActual < rangoMenor)) {
    sueldoFinal = sueldoActual + (sueldoActual * factorAumento3);

} else if ((sueldoActual > rangoMenor) && (sueldoActual < rangoMedio)) {
    sueldoFinal = sueldoActual + (sueldoActual * factorAumento2);

} else if (((sueldoActual > rangoMedio) && (sueldoActual < rangoMayor))) {
    sueldoFinal = sueldoActual + (sueldoActual * factorAumento1);

} else {
    console.log("Tras la aplicacion escalar de aumentos, a ud no le corresponde aumento");

};
console.log("Tras la aplicacion escalar de aumentos, a ud le corresponde un sueldo de " + sueldoFinal + " pesos");