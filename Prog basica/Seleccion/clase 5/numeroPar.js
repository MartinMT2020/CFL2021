let readlineSync = require('readline-sync');
let numero = readlineSync.questionFloat('ingrese un numero');
if (numero==0){
    console.log(numero +" es par y es el numero cero");

} else if(numero%2==0){
    console.log(numero +" es par");
} else {
    console.log(numero +" es impar");
};