/* Dar un form para cargar compras del cliente y un
sumar que nos diga el total (dos botones, un agregar
y otro calcular, arreglo global) */

"use strict";

let acumulado = [];
let btnAgregar = document.getElementById("btn-agregar");
btnAgregar.addEventListener("click", agregarValor);
let btnSumar = document.getElementById("btn-sumar");
btnSumar.addEventListener("click", () => {
    let suma = sumarTotal(acumulado)
    mostrarTotal(suma);
});


function agregarValor() {
    let inputValor = document.getElementById("valor");
    let valor = inputValor.value;
    acumulado.push(parseInt(valor));   
    console.log(acumulado); 
}

function sumarTotal(v) {
    let suma = 0;
    for (let i = 0; i < v.length; i++) {
        suma += v[i];        
        console.log(suma);
    } return suma;
}

function mostrarTotal(total) {
    let nodoMostrar = document.getElementById("total");
    nodoMostrar.innerHTML = total;
}

