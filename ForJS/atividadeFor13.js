//Escreva um laço for para calcular a soma dos números pares entre 1 e 50 e imprima
//o resultado final.

const prompt = require("prompt-sync")()

//let soma = 0

//for (let i = 1; i <= 50; i ++){
//    if(i % 2 == 0) {
//    soma += i
//    }
//}
//console.log(`A Soma é ${soma}`)

let soma = 0

while (i <= 50) {
    i ++
    if (i % 2 == 0) {
        soma += 1
    }
}
console.log(`A Soma é ${soma}`)