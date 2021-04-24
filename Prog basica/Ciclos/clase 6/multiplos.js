for (let numero = 1; numero <= 100; numero++) {
    if ((numero % 2 == 0 || numero % 3 == 0) || (numero % 2 == 0 && numero % 3 == 0)) {
        console.log(numero)
    }
}
