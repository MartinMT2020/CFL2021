/*Ejemplo de switch con valores No discretos NO FUNCIONA*/

let readlineSync = require('readline-sync');
let sueldoActual = readlineSync.questionFloat('ingrese el valor de su sueldo actual');
let factorAumento1 = 0.05;
let factorAumento2 = 0.1;
let factorAumento3 = 0.2;
let sueldoFinal = 0;
switch (sueldoActual) {
    case ((sueldoActual > 0) && (sueldoActual < 15001)):
        sueldoFinal = sueldoActual + (sueldoActual * factorAumento3);
        console.log("Tras la aplicacion escalar de aumentos, a ud le corresponde un sueldo de " + sueldoFinal + " pesos");
        break;
    case ((sueldoActual > 15001) && (sueldoActual < 20001)):
        sueldoFinal = sueldoActual + (sueldoActual * factorAumento2);
        console.log("Tras la aplicacion escalar de aumentos, a ud le corresponde un sueldo de " + sueldoFinal + " pesos");
        break;
    case ((sueldoActual > 20001) && (sueldoActual < 25000)):
        sueldoFinal = sueldoActual + (sueldoActual * factorAumento1);
        console.log("Tras la aplicacion escalar de aumentos, a ud le corresponde un sueldo de " + sueldoFinal + " pesos");
        break;
    default: sueldoActual > 25000;
    console.log("Tras la aplicacion escalar de aumentos, a ud no le corresponde aumento");
       
};

