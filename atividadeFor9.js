//Crie um laço for que calcule o fatorial de um número (por exemplo, 5!), imprimindo
//o resultado final.


const prompt = require("prompt-sync")()

mult = 1

for (let i = 5; i >= 1; i --){
    mult = mult * i
    
}
console.log(`O resultado é ${mult}`)