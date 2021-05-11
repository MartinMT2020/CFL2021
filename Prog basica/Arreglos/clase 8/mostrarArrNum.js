/*
• Construya un algoritmo que tenga un arreglo
de números y se los muestre al usuario
• El arreglo debe ser llamado num
• El arreglo num debe contener los siguientes
datos: 20, 14, 8, 0, 5, 19 y 24.
• Mostrar los valores resultantes del arreglo
*/

let arrNum = new Array(7);

arrNum[0] = 20;
arrNum[1] = 14;
arrNum[2] = 8;
arrNum[3] = 0;
arrNum[4] = 5;
arrNum[5] = 19;
arrNum[6] = 24;

for (let i = 0; i < 7; i++) {
    console.log("El numero en la pos "+i+" es "+arrNum[i]);
}
