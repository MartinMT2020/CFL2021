"use strict";

let btn = document.querySelector("#boton");
btn.addEventListener("click", cambiarEstilo);


function cambiarEstilo() {
  let divUno = document.querySelector(".div-uno");
  let divDos = document.querySelector(".div-dos");
  let divTres = document.querySelector(".div-tres");
  let divCuatro = document.querySelector(".div-cuatro");

  divUno.style.backgroundColor =`rgb(${aleatorio(0,255)}, ${aleatorio(0,255)}, ${aleatorio(0,255)})`;
  divUno.style.marginLeft = `${aleatorio(0, 1300)}px`;
  divUno.style.marginTop = aleatorio(0, 50) + "px";

  divDos.style.backgroundColor = "rgb(" + aleatorio(0, 255) + "," + aleatorio(0, 255) + "," + aleatorio(0, 255) + ")";
  divDos.style.marginLeft = `${aleatorio(0, 1300)}px`;
  divDos.style.marginTop = aleatorio(0, 50) + "px";

  divTres.style.backgroundColor = "rgb(" + aleatorio(0, 255) + "," + aleatorio(0, 255) + "," + aleatorio(0, 255) + ")";
  divTres.style.marginLeft = `${aleatorio(0, 1300)}px`;
  divTres.style.marginTop = aleatorio(0, 50) + "px";

  divCuatro.style.backgroundColor = "rgb(" + aleatorio(0, 255) + "," + aleatorio(0, 255) + "," + aleatorio(0, 255) + ")";
  divCuatro.style.marginLeft = `${aleatorio(0, 1300)}px`;
  divCuatro.style.marginTop = aleatorio(0, 50) + "px";
}

function aleatorio(menorValor, mayorValor) {
  return Math.floor(Math.random() * (mayorValor + 1 - menorValor)) + menorValor;
}
