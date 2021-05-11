let readlineSync = require("readline-sync");
let lengthNombres = 2;
let lengthNumeros = 3;
let arrNombresDeseados = new Array(lengthNombres);
let arrNumerosDeseados = new Array(lengthNumeros);
let i;

for (i = 0; i < lengthNombres; i++) {
    arrNombresDeseados[i] = readlineSync.question("Ingrese un nombre de persona: ");
}
for (i = 0; i < lengthNumeros; i++) {
    arrNumerosDeseados[i] = readlineSync.questionInt("Ingrese un numero: ");
}
for (i = 0; i < lengthNombres; i++) {
    console.log("El nombre en "+i+" es "+arrNombresDeseados[i]);
}
for (i = 0; i < lengthNumeros; i++) {
    console.log("El nombre en "+i+" es "+arrNumerosDeseados[i]);
}