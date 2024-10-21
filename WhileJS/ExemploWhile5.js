const prompt = require("prompt-sync")()

let email 

let senha

do {
    email = prompt("Digite seu E-mail:'")
    senha = prompt("Digite su Senha:")

} while (email !== "fulado@gmail.com" || senha !== "123456")