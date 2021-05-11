/*
• Llenar un array de 10 posiciones con números
aleatorios entre 0 y 99
• Para obtener números aleatorios crear una función
Azar, que se base en las funciones disponibles en el
paquete Math:
-Math.random() devuelve un nro al azar entre 0 y 1.
*/
let arrLength = 10;
let arrNumRandom = new Array(arrLength);

function Azar(tope) {
  return Math.floor(Math.random() * tope);
}

for (i = 0; i < arrLength; i++) {
  arrNumRandom[i] = Azar(100);
  console.log("El arr en la pos " + i + " = " + arrNumRandom[i]);
}
