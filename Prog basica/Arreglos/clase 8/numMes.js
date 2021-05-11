let readlineSync = require("readline-sync");

let arrMeses = new Array (12);
arrMeses[0] = "Enero";
arrMeses[1] = "Febrero";
arrMeses[2] = "Marzo";
arrMeses[3] = "Abril";
arrMeses[4] = "Mayo";
arrMeses[5] = "Junio";
arrMeses[6] = "Julio";
arrMeses[7] = "Agosto";
arrMeses[8] = "Septiembre";
arrMeses[9] = "Octubre";
arrMeses[10] = "Noviembre";
arrMeses[11] = "Diciembre";

let mes = readlineSync.questionInt("Ingrese un numero de mes valido: ");
let indice = mes - 1;
console.log("El mes es ", arrMeses[indice] );