/* 5. Cree una página que tenga un text box, un label y un botón. 
Al hacer clic en el botón se deberá ejecutar una función javascript,
que tomando lo ingresado en el text box, invierta las letras y lo imprima en la consola.
Ejemplo:
Text box: Hola Mundo!
console.log: !odnuM aloH */

"use strict";

function main() {
  let btnInvertir = document.getElementById("btn-invertir");
  btnInvertir.addEventListener("click", (e) => {
    let inputTxt = document.getElementById("cadena");
    let texto = inputTxt.value;
    let txtInvertido = stringInvertido(texto);
    console.log(txtInvertido);
    // let largo = texto.length;
    // escribirInvertidoEnUnaLinea(texto, largo);
  });
}

function stringInvertido(texto) {
    return texto.split('').reverse().join('');
}

//UNA FORMA ALTERNATIVA
function escribirInvertidoEnUnaLinea(arreglo, cantidad) {
    let i;
    let vector = "";
    for (i = cantidad - 1; i >= 0; i--) {
        vector = vector + arreglo[i];
    }
    console.log(vector);
}


// OTRA ALTERNATIVA => PUEDO REEMPLAZAR EN MAIN LA FUNCION ACTIVA POR:

//   texto = texto.split("");
//   invertirVector(texto, largo);
//   texto = texto.join("");
//   console.log(texto);

// Y UTILIZAR LUEGO LA FUNCION invertirVector:

// function invertirVector(v, cantidad) {
//   let indiceIzq = 0;
//   let indiceDer = cantidad - 1;
//   let aux;
//   while (indiceIzq < indiceDer) {
//     aux = v[indiceIzq];
//     v[indiceIzq] = v[indiceDer];
//     v[indiceDer] = aux;
//     indiceIzq++;
//     indiceDer--;
//   }
//     console.log(v);
// }


main();