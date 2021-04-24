let readlineSync = require('readline-sync');
let clave = "Eureka";

for(let intento = 1;intento <= 3;intento++){
    let ingresoClave = readlineSync.question('ingrese la clave alfabetica');
    if (ingresoClave == clave){
        console.log("ha ingresado con exito")
        intento = 3
    }
}

if(ingresoClave != clave){
    console.log("ha agotado las oportunidades")
}