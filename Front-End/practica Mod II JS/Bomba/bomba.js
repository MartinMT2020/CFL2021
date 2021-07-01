"use strict";

let btnDetonar = document.getElementById("btn-detonar");
btnDetonar.addEventListener("click", function (e) {
  let t_detonacion = document.getElementById("inputBomba").value;
  alert("Al suelo!! en 2 segundos se activará la Bomba");
  setTimeout(function () {
    cuentaRegresiva(t_detonacion);
  }, 2000); // llamado diferido
});

function cuentaRegresiva(timer) {
  let intervalo = setInterval(function () {
    let cronometro = document.getElementById("cta-regresiva");
    cronometro.innerHTML = timer;
    if (timer === 0) {
      clearInterval(intervalo); // limpio intervalo para detener
      let fondo = document.getElementById("contenedor");
      fondo.classList.add("back");
      cronometro.innerHTML = "BOOOOOMMMM!!";
    } else {
      timer--;
    }
  }, 700);
}
