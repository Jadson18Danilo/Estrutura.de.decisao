const prompt = require("prompt-sync")()

let soma = 0

for (let i = 1; i <= 9; i ++){
    let num = parseInt(prompt(`Digite o número: `))
    soma += num
}
console.log(`O resultado é ${soma}`)
