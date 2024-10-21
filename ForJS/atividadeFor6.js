//Crie um laço for que imprima os números de 2 a 20 em incrementos de 2. Use
//apenas for e if para garantir que o número seja par antes de imprimi-lo.

const prompt = require("prompt-sync")()

//for (let i = 2; i <= 20; i +=2) {
//    console.log(i);
//}


let i = 1

while (i <= 20) {
    i +=2
    console.log(`É PAR ${i}`)
}
