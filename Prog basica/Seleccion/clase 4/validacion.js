let readlineSync = require('readline-sync');
let usuario = readlineSync.question('ingrese nombre de usuario');
let clave = readlineSync.question('ingrese su clave alfabetica');
let usuarioDefinido = "Juan";
let claveDefinida = "claveJuan";
if ((usuario == usuarioDefinido) && (clave == claveDefinida)) {
    console.log("validacion aceptada")
}
else {
    console.log("usuario o clave incorrectos")
};