let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('ingrese un numero entero distinto de 0');

while(numero == 0){
    let numero = readlineSync.questionInt('ingrese un numero entero distinto de 0');
}
if(numero%2==0){
    console.log(numero+" es par")
} else {
    console.log(numero+" es impar")
}