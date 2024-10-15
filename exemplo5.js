const prompt = require("prompt-sync")()

for (let index = 0; index <= 10; index++) {
    if (index % 2 === 0) {
        console.log(`${index} É Par`);// Interpolar
    } 
    else {
        console.log(`${index} É Inpar`);
    }
    
}