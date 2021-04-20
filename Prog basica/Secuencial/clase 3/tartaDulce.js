let readlineSync = require('readline-sync');
let sabor = readlineSync.question('elija un sabor');
let coccion = "batir, "+" amasar, "+" hornear";
let tarta = coccion +(" y obtenemos una tarta de " + sabor);
console.log(tarta);