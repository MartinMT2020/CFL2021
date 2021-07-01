/*1_ Muestre un mensaje de alerta al presionar un botón 
si el valor introducido en un campo de texto es negativo y en otro campo de texto positivo. 
¿Cómo cambiaría si la condición fuera que alguno de los dos fuera positivo?*/

"use strict";

let boton = document.getElementById("btn-alert");
boton.addEventListener("click", mostrarAlert);

//Alternativa que chequea un num (+) y el otro (-)

// function mostrarAlert() {
//     let input1 = document.getElementById("num1");
//     let valor1 = input1.value;
//     console.log(valor1);
//     let input2 = document.getElementById("num2");
//     let valor2 = input2.value;
//     console.log(valor2);
//     if ((valor1 < 0 && valor2 > 0) || (valor1 > 0 && valor2 < 0)) {
//         alert("ha ingresado un num pos y otro neg");       
//     }    
// }


//Alternativa que chequea al menos uno de los dos num (+) 

function mostrarAlert() {
    let input1 = document.getElementById("num1").value;
    let input2 = document.getElementById("num2").value;

    if (input1 > 0 || input2 > 0) {
        alert("ha ingresado al menos un num pos");       
    }    
}