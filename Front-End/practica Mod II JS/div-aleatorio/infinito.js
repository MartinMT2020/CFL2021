"use strict";


let intervals = [];

function main() {
    let btnStart = document.querySelector("#boton-start");
    btnStart.addEventListener("click", cambiarEstiloAuto);    
    let btnStop = document.querySelector("#boton-stop");
    btnStop.addEventListener("click", detener);    
}

function cambiarEstiloAuto() {
    let intervalo = setInterval(cambiarEstilo, 400);   
    intervals.push(intervalo);   
}

function detener() {
    let intervalo = intervals.pop();
    clearInterval(intervalo);
}

function cambiarEstilo() { 
        let divUno = document.querySelector("#divUno");
            divUno.style.backgroundColor =`rgb(${aleatorio(0,255)}, ${aleatorio(0,255)}, ${aleatorio(0,255)})`;
            divUno.style.marginLeft = `${aleatorio(0, 1200)}px`;
            divUno.style.marginTop = aleatorio(0, 250) + "px";
        let tamanio = `${aleatorio(10, 300)}px`;
            divUno.style.height = tamanio;
            divUno.style.width = tamanio;
}


function aleatorio(menorValor, mayorValor) {
    return Math.floor(Math.random() * (mayorValor + 1 - menorValor)) + menorValor;
}

main();

//De esta manera no funciona:

// function desencadenar() {
//     let contador = 0;
//     while (contador < 100){
//         cambiarEstilo();
//         contador++;   
//     }
// }