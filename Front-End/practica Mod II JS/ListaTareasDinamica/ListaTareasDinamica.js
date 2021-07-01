/*Dada una lista de tareas, permitir que el usuario
agregue dinámicamente nuevas tareas y
mostrarlas sin necesidad de actualizar la página. */

"use strict";

let btnAgregar = document.getElementById("btn-agregar");
btnAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {
    let lista = document.getElementById("miLista");
    let inputTxt = document.getElementById("tarea");
    let tarea = document.createElement("li");
    tarea.innerHTML = inputTxt.value;
    lista.appendChild(tarea);
}
