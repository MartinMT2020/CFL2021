/*
4. Escribir una programa que calcule y retorne el número de días que faltan hasta final de año,
 a partir de una determinada fecha (dia, mes, año) teniendo en cuenta si el año es bisiesto. 
 Puede usar la siguiente pagina como referencia para verificar si un año es bisiesto o no 
 https://es.wikihow.com/calcular-los-a%C3%B1os-bisiestos. 
 Agregue el código como respuesta y los comentarios que crea necesarios
*/

let readlineSync = require("readline-sync");
let dia = readlineSync.questionInt("Elija una fecha e ingrese el numero de dia de 1 a 31, si es febrero de 1 a 28, o 29 si el anio es bisiesto: ");
let mes = readlineSync.questionInt("Respecto de la misma fecha ingrese el numero de mes de 1 a 12: ");
let anio = readlineSync.questionInt("Finalmente ingrese el anio: ");
let anioTotal = 365;
let anioTotalBisiesto = 366;
let diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let cantDiasRestantes = calcularDiasHastaFinDeAnio(dia, mes, anio);
console.log("La cantidad de dias restantes para el final del anio es de: " + cantDiasRestantes);

function calcularDiasHastaFinDeAnio(dia, mes, anio) {
  let diasTranscurridos = 0;
  let cantDiasRestantes = 0;
  let j = mes - 1;
  for (i = 0; i < j; i++) {
    diasTranscurridos += diasDelMes[i];
  }
  diasTranscurridos += dia;
  if (esAnioBisiesto(anio)) {
    if (mes > 2) {
      diasTranscurridos++;
    }
    cantDiasRestantes = anioTotalBisiesto - diasTranscurridos;
  } else {
    cantDiasRestantes = anioTotal - diasTranscurridos;
  }
  return cantDiasRestantes;
}

function esAnioBisiesto(anio) {
  if (anio % 4 == 0 && (anio % 100 != 0 || anio % 400 == 0)) {
    return true;
  }
  return false;
}


