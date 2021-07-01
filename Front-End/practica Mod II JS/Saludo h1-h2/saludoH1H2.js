/* 4. Cree una pagina con un input, un checkbox y un boton. 
Al presionar el boton, si el checkbox está seleccionado 
debe aparecer un saludo en un h1 y sino en un h2. */

"use strict";

let btnSaludar = document.getElementById("btn-saludar");
btnSaludar.addEventListener("click", saludar);

function saludar() {
  let divPadre = document.getElementById("divPadre");
  let inputTxt = document.getElementById("saludo");
  
  let checkbox = document.getElementById("tilde");
  let tilde = checkbox.checked;
  console.log(tilde);
  
  if (tilde) {
    let nuevoH1 = document.createElement("h1");
    nuevoH1.innerHTML = inputTxt.value;
    divPadre.appendChild(nuevoH1);
  } else {
    let nuevoH2 = document.createElement("h2");
    nuevoH2.innerHTML = inputTxt.value;
    divPadre.appendChild(nuevoH2);
  }
}
