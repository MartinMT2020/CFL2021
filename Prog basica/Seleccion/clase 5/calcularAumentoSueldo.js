let read = require('readline-sync');
let sueldoActual = read.questionFloat("Ingrese el sueldo actual: ");
let aumentoCorrespondiente;
let sueldoAjustado;

switch (true) {
    case ((sueldoActual > 0) && (sueldoActual <= 15000)):
        aumentoCorrespondiente = sueldoActual * 0.2
        break;

    case ((sueldoActual > 15000) && (sueldoActual <= 20000)):
        aumentoCorrespondiente = sueldoActual * 0.1

        break;
    case ((sueldoActual > 20000) && (sueldoActual <= 25000)):
        aumentoCorrespondiente = sueldoActual * 0.05
        break;

    default:
        aumentoCorrespondiente = sueldoActual * 0
        console.log("Su salario es mayor a $25.000 y por lo tanto no recibe aumento");
}
sueldoAjustado = sueldoActual + aumentoCorrespondiente;
console.log("Le corresponde un aumento de: " + aumentoCorrespondiente + " pesos" + " con el que su sueldo será de " + sueldoAjustado + " pesos");