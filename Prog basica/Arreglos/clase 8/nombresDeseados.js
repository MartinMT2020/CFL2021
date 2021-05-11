let readlineSync = require("readline-sync");
let length = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arrNombresDeseados = new Array(length);
let i;

for (i = 0; i < length; i++) {
    arrNombresDeseados[i] = readlineSync.question("Ingrese un nombre de persona: ");
}
for (i = 0; i < length; i++) {
    console.log("El nombre en "+i+" es "+arrNombresDeseados[i]);
}
