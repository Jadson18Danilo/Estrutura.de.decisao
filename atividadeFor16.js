//Usando for e if, verifique se um número específico entre 1 e 20 é primo,
//imprimindo "É primo" ou "Não é primo".

const prompt = require("prompt-sync")()

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} É Primo`);
    }
    else {
        console.log(`${i} Não é primo`)
    } 
     
}