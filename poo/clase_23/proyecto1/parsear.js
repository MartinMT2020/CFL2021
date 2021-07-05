let parseWord = require('@alordash/parse-word-to-number');
let readline = require("readline-sync");
let word = readline.question("ingrese un numero escrito como palabra ")
let parsedWord = parseWord.parseWord(word);
if(parsedWord && parsedWord.length > 0){
    console.log(parsedWord[0].value);
} else {
    console.log("Los datos ingresados son incorrectos");
}

