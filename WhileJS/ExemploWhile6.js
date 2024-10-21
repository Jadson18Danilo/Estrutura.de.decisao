let x = 2
let y = 3

console.log((x == y) && (x === x)) // F && V = F
console.log((x != y) || (x === x)) // F || V = F
console.log((y != y) || (x !== x)) // F || F = F