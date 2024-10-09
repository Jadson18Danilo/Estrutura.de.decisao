//crie um algoritmo que receba 6 numeros
// e imprima a sua media aritmetrica

const prompt = require("prompt-sync")()

let quant = parseInt(prompt("Digite a quantidade de repetições: "))

let soma = 0

for (let i = 1; i <= quant; i ++){
    let nota = parseInt(prompt(`Digite a nota: `))
    soma += nota 
}

let media = soma / quant

console.log(`O resultado da média é ${media}`)
