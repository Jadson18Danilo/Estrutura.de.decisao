//Usando for, if e else, imprima os números de 1 a 20 e, para cada número, imprima
//se ele é "menor que 10" ou "maior ou igual a 10".

const prompt = require("prompt-sync")()

for (let i = 1; i <= 20; i++) {
    if (i < 10) {
        console.log(`${i} É menor que 10`);
    }
    else if(i == 10) {
        console.log(`${i} É igual a 10`)
    } 
    else {
        console.log(`${i} É maior que 10`);
    }   
}