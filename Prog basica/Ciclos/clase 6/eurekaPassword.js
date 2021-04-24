let readlineSync = require('readline-sync');
let ingresoClave = readlineSync.question('ingrese la clave alfabetica');
let clave = "Eureka";
let intento = 1;
while ((ingresoClave != clave) && (intento < 3)){
    intento++; 
    ingresoClave = readlineSync.question('ingrese la clave alfabetica'+" oportunidad"+intento); 
}
if (ingresoClave == clave){
    console.log("ha ingresado con exito")
    
} else {
    console.log("ha agotado las oportunidades")
}

