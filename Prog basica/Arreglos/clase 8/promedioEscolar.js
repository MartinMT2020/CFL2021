let readlineSync = require("readline-sync");
   

let alumnos = new Array(3);
let notas1C = new Array(3);
let notas2C = new Array(3);
let notas3C = new Array(3);
let nombre;
let alumno;

cargarAlumnosCon_3_Notas(alumnos, notas1C, notas2C, notas3C);
console.log("El listado de alumnos es: ");
mostrarVectorExtendido(alumnos);
console.log("Las notas correspondientes al 1C son: ");
mostrarVectorExtendido(notas1C);
console.log("Las notas correspondientes al 2C son: ");
mostrarVectorExtendido(notas2C);
console.log("Las notas correspondientes al 3C son: ");
mostrarVectorExtendido(notas3C);

while(nombre != 0){
    nombre = readlineSync.question("Ingrese el nombre de un alumno para saber su promedio, o 0 para salir ");
    if (nombre != 0) {
        alumno = encontrarAlumno(alumnos, nombre);
        console.log("El promedio anual del alumno " + nombre + " es:" + calcularPromedioAnual(notas1C, notas2C, notas3C, alumno));      
    } 
}

function cargarAlumnosCon_3_Notas(listado, notasC1, notasC2, notasC3) {
  let i;
  for (i = 0; i < listado.length; i++) {
    listado[i] = readlineSync.question("Ingrese el nombre del alumno: ");
    notasC1[i] = readlineSync.questionInt("Ingrese la nota del 1er cuatrimestre del alumno " + listado[i] + ": ");
    notasC2[i] = readlineSync.questionInt("Ingrese la nota del 2do cuatrimestre del alumno " + listado[i] + ": ");
    notasC3[i] = readlineSync.questionInt("Ingrese la nota del 3er cuatrimestre del alumno " + listado[i] + ": ");    
  }
}

function mostrarVectorExtendido(v) {
    let i;
    let vector = "";
    for (i = 0; i < v.length; i++) {
        vector += v[i] + " " ;
    }
    console.log(vector);
}

function calcularPromedioAnual(notas1C, notas2C, notas3C, alumno) {
  let promedio = (notas1C[alumno] + notas2C[alumno] + notas3C[alumno]) / 3;
  return promedio;
}

function encontrarAlumno(listado, nombre) {
  for (let i = 0; i < listado.length; i++) {
    if (listado[i] == nombre) {
      return i;
    }
  }
}