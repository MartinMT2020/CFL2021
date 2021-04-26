/*
• Al tirar un dado tenemos 1/6 de
probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36
probabilidades de sacar doble 6
• Al aumentar el número de dados la
probabilidad de sacar todos 6 es cada
vez menor
• Escriba un programa que calcule la
probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato
ingresado por al usuario)
*/

let readlineSync = require('readline-sync');

let cantDados = readlineSync.questionInt('ingrese un numero entero positivo para establecer con cuantos dados tira, o menor para salir');
let numeroCaras = 6;

while(cantDados < 1){
    cantDados = readlineSync.questionInt('ingrese un numero entero positivo para establecer con cuantos dados tira, o menor para salir');
}

let probabilidad = Math.pow(numeroCaras, cantDados);
console.log("La probabilidad de sacar el 6 en todos los dados es de 1/"+probabilidad);
