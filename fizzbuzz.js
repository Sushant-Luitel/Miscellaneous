// fizz for multiple of 3, buzz for multiple of 5 and fizzbuzz for multiple of 3 and 5

const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number"));

for (let i = 1; i <= num; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("BUzz");
  else console.log(i);
}
