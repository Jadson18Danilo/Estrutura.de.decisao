//Usando for e if, calcule a soma de todos os números de 1 a 100 e imprima o
//resultado.

const prompt = require("prompt-sync")()

let soma = 0

for (let i = 1; i <= 100; i ++){
    soma += i
}
console.log(`O resultado é ${soma}`)