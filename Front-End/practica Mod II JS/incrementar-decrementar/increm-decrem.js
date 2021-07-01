"use strict";

let inputElem = document.getElementById("elemento");
inputElem.addEventListener("input", ActualizarElemento)
let btnIncrem = document.getElementById("incremento");
btnIncrem.addEventListener("click", incrementar);
let btnDecrem = document.getElementById("decremento");
btnDecrem.addEventListener("click", decrementar);
let btnSumarVarios = document.getElementById("varios");
btnSumarVarios.addEventListener("click", sumarVarios);

let inputRes = document.getElementById("resultado");
inputRes.value = 0;

function ActualizarElemento() {
    let inputElem = document.getElementById("elemento");
    let elemento = inputElem.value;
    console.log(elemento);
    let elem = document.getElementById("elem");
    elem.innerHTML = elemento;
}

function incrementar() {
    let inputRes = document.getElementById("resultado");
    inputRes.value++;   
    mostrarCant(); 
}

function decrementar() {
    let inputRes = document.getElementById("resultado");
    inputRes.value--;
    mostrarCant();     
}

function sumarVarios() {   
    let inputAgregar = document.getElementById("agregar");
    let adicional = parseInt(inputAgregar.value);
    console.log(adicional);
    let inputRes = document.getElementById("resultado");
    let valorActual = parseInt(inputRes.value);
    console.log(valorActual);
    inputRes.value = valorActual + adicional;     
    mostrarCant();
}

function mostrarCant() {
    let inputRes = document.getElementById("resultado");
    let contador = document.getElementById("conteo");
    contador.innerHTML = inputRes.value;    
}

