/*
• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total
*/

let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('ingrese un numero entero distinto de 0, o este para salir');
let cantPositivos = 0;
let cantTotalNum = 0;

while (numero != 0) {
    cantTotalNum++
    if (numero > 0) {
        cantPositivos++;
    }
    numero = readlineSync.questionInt('ingrese un numero entero distinto de 0, o este para salir');
}
let porcentaje = (cantPositivos * 100) / cantTotalNum;

console.log("la cantidad de valores positivos ingresados es de " + cantPositivos + ", lo que corresponde a un " + porcentaje + "% del total de numeros ingresados");