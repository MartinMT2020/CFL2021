/* 1- Crear una pagina que contenga un input donde el usuario pueda cargar tareas. 
También deberá tener un botón "guardar tarea" cuyo funcionamiento sea agregar el contenido del input a una lista 
sin eliminar los valores cargados previamente

2- Crear un botón que se llame "Limpiar lista" y que al hacer click 
elimine todo el contenido de la lista de tareas.

3- Agregar como mínimo dos estilos para los elementos que prefiera. */

"use strict";

let btnGuardar = document.getElementById("btn-guardar");
btnGuardar.addEventListener("click", guardarTarea);

let btnBorrar = document.getElementById("btn-borrar");
btnBorrar.addEventListener("click", borrarLista);

let lista = document.getElementById("miLista");

function guardarTarea() {
  let inputTxt = document.getElementById("tarea");
  let tarea = document.createElement("li");
  tarea.innerHTML = inputTxt.value;
  lista.appendChild(tarea);
  inputTxt.value = ""; //agregada post examen, para limpiar el input
}

function borrarLista() {
  lista.innerHTML = "";
}

