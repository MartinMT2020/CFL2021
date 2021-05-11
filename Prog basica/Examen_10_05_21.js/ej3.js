let readlineSync = require("readline-sync"); //let rl = require("readline-sync");
let arrDimension, arrNumeros, ocurrencia, numero; //let elem(No representativo), arr, ocu, nro
arrNumeros = new Array(arrDimension);
arrDimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
cargarArr(arrNumeros, arrDimension);
numero = readlineSync.questionInt("Ingrese un numero: ");
ocurrencia = encontrarOcurrenciaNumero(arrNumeros, arrDimension, numero);
console.log("El numero "+numero+" se encuentra "+ocurrencia+" veces en el arreglo");
mostrarArr(arrNumeros, arrDimension);


//Declaro las funciones a utilizar (corregidas, con nombres representativos). 
//En todos los for se agregan las llaves correspondientes ya que ninguno poseia.

function cargarArr(v, l) {
  for (i = 0; i < l; i++) {
    v[i] = Math.floor(Math.random() * 100);
  }
}

function mostrarArr(v, l) {
  let arreglo = " "; //c no resultaba representativo como nombre de variable
  for (i = 0; i < l; i++) {
    arreglo += v[i] + " ";
  }
  console.log(arreglo); //No habia console.log en el metodo original, no mostraba nada por consola
}

function encontrarOcurrenciaNumero(v, l, n) {
  let ocurrencia = 0;
  for (i = 0; i < l; i++) {
    if (v[i] == n) {
      ocurrencia++;
    }
  }
  return ocurrencia; //originalmente no habia return, la funcion no devolvia valor
}

//Un detalle para comprobar la funcionalidad es usar una dimension de arreglo amplia si queremos verificar ocurrencias
//En caso contrario disminuir el valor del multiplicador (100) en la funcion cargarArr, reemplazandolo por un 10 por ejemplo