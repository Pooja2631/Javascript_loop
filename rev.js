let a = require("readline-sync");
var num1= a.questionInt("enter your number--")
let string = "";
for (let i = 1; i <= num1; i++) {
  for (let j = 0; j < num1 - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string)
