const prompt = require("prompt-sync")();

// let n = prompt("Enter a number: ");

// let i = 0
// while (i<11) {
//     console.log(n,"x",i,"=",n*i);
//     i++;
// }

let x = prompt("Enter a number: ");
for (let i=0; i<(x); i++) {
    for (let j=0; j<(i); j++){
        process.stdout.write("*");
    }
    console.log();
}