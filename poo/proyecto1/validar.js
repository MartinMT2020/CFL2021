let valid = require("card-validator");
let readline = require("readline-sync");
let numero = readline.question("ingrese el numero de su tarjeta ");
let numberValidation = valid.number(numero);

if (!numberValidation.isPotentiallyValid) {
  console.log("No es un numero valido");
}

if (numberValidation.card) {
  console.log(numberValidation.card.type); // 'visa'
}