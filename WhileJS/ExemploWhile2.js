
const prompt = require("prompt-sync")()

let contado = 0

while (contado < 10) {
    if (contado % 2 === 0) {
        console.log(contado)
    }
    contado++
}