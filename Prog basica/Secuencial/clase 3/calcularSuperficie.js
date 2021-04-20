let readlineSync = require('readline-sync');
let base = readlineSync.question('defina el valor de la base');
let altura = readlineSync.question('defina el valor de la altura');
let superficie = base*altura;
let respuesta = "la superficie es de "+superficie+" mts2";
console.log(respuesta);