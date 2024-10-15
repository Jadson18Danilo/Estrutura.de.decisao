//Crie um laço for para imprimir apenas os números ímpares de 1 a 30.

const prompt = require("prompt-sync")()

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(`${i} É Inpar`);
    } 
}