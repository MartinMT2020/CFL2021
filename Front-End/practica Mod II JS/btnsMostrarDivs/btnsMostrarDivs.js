/* Analizar cómo modificar el ejercicio anterior para
que sea un código reutilizable (poder poner
muchos botones que oculten o muestren un div
respectivo) */

"use strict";

let btns = document.querySelectorAll('.btn');

for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e){
  let elem = this.nextElementSibling;
  elem.classList.toggle("ver");
  });
}