//Usando for e if, imprima os números de 1 a 50, mas interrompa o laço ao encontrar
//um número maior que 40 (use break).

const prompt = require("prompt-sync")()

for (let i = 1; i <= 50; i++) {
    if (i == 41) {
        break
    } 
    else {
        console.log(i)
    }
}