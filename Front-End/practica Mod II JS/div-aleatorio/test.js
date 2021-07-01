"use strict";

let divUno;
let intervals = [];

function main() {
    let btnStart = document.querySelector("#boton-start");
    btnStart.addEventListener("click", cambiarEstiloAuto);    
    let btnStop = document.querySelector("#boton-stop");
    btnStop.addEventListener("click", detener);    
}
//SE EJECUTA LAS VECES INDICADAS SIN CAMBIAR EL VALOR DE LOS ESTILOS (VER POR CONSOLA)
function cambiarEstiloAuto() {
    let contador = 0;
    while(contador < 10){
        cambiarEstilo();
        contador++;
    }
}

function detener() {
    let intervalo = intervals.pop();
    clearInterval(intervalo);
}

function cambiarEstilo() { 
    divUno = document.querySelector("#divUno");
    divUno.style.backgroundColor =`rgb(${aleatorio(0,255)}, ${aleatorio(0,255)}, ${aleatorio(0,255)})`;
    divUno.style.marginLeft = `${aleatorio(0, 1200)}px`;
    divUno.style.marginTop = aleatorio(0, 250) + "px";
    let tamanio = `${aleatorio(10, 300)}px`;
    divUno.style.height = tamanio;
    divUno.style.width = tamanio;
    console.log(divUno);
    debugger;
}


function aleatorio(menorValor, mayorValor) {
    return Math.floor(Math.random() * (mayorValor + 1 - menorValor)) + menorValor;
}

main();