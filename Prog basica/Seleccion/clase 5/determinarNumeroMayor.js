let readlineSync = require('readline-sync');
let numeroMayor = readlineSync.questionFloat('ingrese un numero');
let numero_2 = readlineSync.questionFloat('ingrese un numero');
let numero_3 = readlineSync.questionFloat('ingrese un numero');

if(numeroMayor < numero_2){
        numeroMayor = numero_2
    } 
if(numeroMayor < numero_3){
        numeroMayor = numero_3
};
console.log(numeroMayor);