let read = require('readline-sync');
let sueldoActual = read.questionFloat("Ingrese el sueldo actual: ");
const nulo = 0;
let factorAumento1 = 0.05;
let factorAumento2 = 0.1;
let factorAumento3 = 0.2;
let rangoMenor = 15001;
let rangoMedio = 20001;
let rangoMayor = 25000;
let aumentoCorrespondiente = 0;
let sueldoAjustado = sueldoActual;

switch (true) {
    case ((sueldoActual > nulo) && (sueldoActual <= rangoMenor)):
        aumentoCorrespondiente = sueldoActual * factorAumento3
        break;

    case ((sueldoActual > rangoMenor) && (sueldoActual <= rangoMedio)):
        aumentoCorrespondiente = sueldoActual * factorAumento2

        break;
    case ((sueldoActual > rangoMedio) && (sueldoActual <= rangoMayor)):
        aumentoCorrespondiente = sueldoActual * factorAumento1
        break;

    default:
        aumentoCorrespondiente = sueldoActual * nulo
        console.log("Su salario es mayor a $25.000 y por lo tanto no recibe aumento");
}
sueldoAjustado = sueldoActual + aumentoCorrespondiente;
console.log("Le corresponde un aumento de: " + aumentoCorrespondiente + " pesos" + " con el que su sueldo será de " + sueldoAjustado + " pesos");