const prompt = require('prompt-sync')();
let n = prompt("Enter a number: ");


if (n>0) {
    console.log("You entered a Positive number.");
}
else if (n<0) {
    console.log("You entered a negative number.");
}
else {
    console.log("You entered zero.");
}
