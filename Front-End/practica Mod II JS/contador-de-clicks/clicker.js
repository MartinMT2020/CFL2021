"use strict"

let contador = 0;
function contarClicks() {
    contador++;  
    console.log(contador);  
    let msj = document.getElementById("mensaje");
    msj.innerHTML = "Hiciste "+contador+" clicks";
}
