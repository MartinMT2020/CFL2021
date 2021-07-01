"use strict";

elemento.addEventListener("input", ActualizarElemento)
incremento.addEventListener("click", incrementar);
decremento.addEventListener("click", decrementar);
varios.addEventListener("click", sumarVarios);

resultado.value = 0;

function ActualizarElemento() {
    elem.innerHTML = elemento.value;
}

function incrementar() {
    resultado.value++;    
    mostrarCant();
}

function decrementar() {
    resultado.value--;   
    mostrarCant();  
}

function sumarVarios() {   
    resultado.value = parseInt(agregar.value) + parseInt(resultado.value);     
    mostrarCant();
}

function mostrarCant() {
    conteo.innerHTML = resultado.value;    
}