let readlineSync = require('readline-sync');
let i, linea, resultado;
let numero1 = readlineSync.questionInt("Ingrese un numero: ");
let numero2 = readlineSync.questionInt("Ingrese un numero: ");
let opcionMenu = readlineSync.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");

if(opcionMenu == 1){
    resultado = numero1+numero2;
} else if(opcionMenu == 2){
    resultado = numero1-numero2;    
}
linea = "-";
for (i = 0; i <= 40; i++) {
linea = linea + "-";
};
console.log(linea);
console.log("el resultado es: "+resultado);
console.log(linea);

/*-------------------------------------------------------------------*/
/* Usando Metodos */

function dibujarGuiones () {
    let i;
    let linea = "-";
    for (i = 0; i <= 40; i++) {
    linea = linea + "-";
    };
    console.log(linea);
    }

dibujarGuiones();
dibujarGuiones();
dibujarGuiones();
console.log("el resultado es: "+resultado);
dibujarGuiones();
dibujarGuiones();
dibujarGuiones();


/*-------------------------------------------------------------------*/
/* Usando Metodos CON PARAMETROS */

function dibujarGuionesN(n) {
    let i;
    let linea = "-";
    for (i = 0; i <= n; i++) {
    linea = linea + "-";
    };
    console.log(linea);
    }

dibujarGuionesN(20)
console.log("el resultado es: "+resultado);
dibujarGuionesN(60)