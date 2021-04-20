let readlineSync = require('readline-sync');
let numeroMayor = readlineSync.questionFloat('ingrese un numero');
let numero_2 = readlineSync.questionFloat('ingrese un numero');
let numero_3 = readlineSync.questionFloat('ingrese un numero');
if ((numeroMayor > numero_2) && (numeroMayor > numero_3)) {
    
} else if (numero_2 > numero_3) {
    numeroMayor = numero_2;
} else {
    numeroMayor = numero_3;
};
console.log("De los numeros ingresados, el mayor es el "+numeroMayor);