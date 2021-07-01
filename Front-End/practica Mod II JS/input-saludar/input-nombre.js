function ActualizarSaludo() {
let inputNombre = document.getElementById("txtNombre");
let nombre = inputNombre.value;
console.log(nombre);
let saludo = document.getElementById("txtSaludo");
saludo.innerHTML = "Hola " + nombre;
}