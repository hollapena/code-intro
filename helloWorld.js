console.log("Hello World")
const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

console.log("Hello World");
const name = "Callie";
let age = 36;
const isCool = true;

let x = 4;
let y = 10;
let z = 7 + 8;
let sum = x + y;
let str = 'This is a string ';
let strTwo = "This is a second string ";
let strThree = `This is my name: ${name}, and this is my age: ${age}`;

reader.question("Howdy, what's your name?", function(answer) {
    console.log("Hi " + answer);
  });