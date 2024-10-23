//Usando for e if, verifique se um número específico entre 1 e 20 é primo,
//imprimindo "É primo" ou "Não é primo".

const prompt = require("prompt-sync")()

// const numero = parseInt(prompt("Digite um número: "))

// contar a quantidade de divisores
// for (let i = 1; i <= numero; i++) {
//     let ehDivisivel = numero % i === 0
//     if (ehDivisivel) divisores++
        
// }

// verificar se é primo
// let ehPrimo = divisores === 2
// if (ehPrimo) {
//     console.log("É primo")    
// } else {
//     console.log("Não é primo")
// }

for (let i = 1; i <= 20; i++) {
   if (i % 2 === 0 && i > 3) {
       console.log(`${i} Não é primo`);
   }
   else if(i % 3 === 0 && i > 3) {
       console.log(`${i} Não é primo`)
   } else {
    console.log(`${i} É primo`)
   }    
}

// let i = 1

// while (i <= 20) {
//     i ++
//     if (i % 2 === 0) {
//         console.log(`${i} É Primo`);
//     }
//     else {
//         console.log(`${i} Não é primo`)
//     } 
// }