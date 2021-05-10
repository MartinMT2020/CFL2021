function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

let area = calcularAreaTriangulo(2, 6);
console.log("El area del triangulo es: " + area);


/* -------------------------------------------------------------------- */
//usando arrow function
let calcularAreaTriangulo2 = (base, altura) => (base * altura) / 2;

let area2 = calcularAreaTriangulo2(3, 8);
console.log("El area del triangulo es: " + area2);

/* -------------------------------------------------------------------- */
//Llamando la funcion dentro de un ciclo

let i;
for (i = 1; i <= 100; i++) {
console.log("El area es = ", calcularAreaTriangulo (i, i*2));
}