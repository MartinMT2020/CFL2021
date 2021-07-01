/*
Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)
*/

let readlineSync = require('readline-sync');

let nombreAlumno = readlineSync.question('ingrese el nombre del alumno: ');

if (nombreAlumno != "") {
    while (nombreAlumno != "") {
    
        let notaPractica = readlineSync.questionFloat('ingrese la nota practica entre 0 y 10 ');
        let notaProblemas = readlineSync.questionFloat('ingrese la nota de problemas entre 0 y 10 ');
        let notaTeoria = readlineSync.questionFloat('ingrese la nota teorica entre 0 y 10 ');
        let notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeoria * 0.4;
        if ((notaPractica >= 0 && notaPractica <= 10) && (notaProblemas >= 0 && notaProblemas <= 10) && (notaTeoria >= 0 && notaTeoria <= 10)) {
            console.log("La nota final del alumno " + nombreAlumno + " es: " + notaFinal);
        } else{            
            console.log("ha ingresado las notas de forma incorrecta");
        }
        nombreAlumno = readlineSync.question('ingrese el nombre del alumno: ');
    }
    console.log("no ha ingresado datos por lo que saldrá del programa");
} else console.log("no ha ingresado datos por lo que saldrá del programa");


