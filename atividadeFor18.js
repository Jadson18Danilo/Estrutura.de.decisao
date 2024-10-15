//Crie um laço for que imprima todos os números de 1 a 20 e, para cada número, use
//if para imprimir também o seu quadrado (por exemplo: "Número: 3, Quadrado: 9").

const prompt = require("prompt-sync")()

let quad = 1

for (let i = 1; i <= 20; i++) {
    quad = i * i
    console.log(`Número ${i},Quadrado ${quad}`);
}