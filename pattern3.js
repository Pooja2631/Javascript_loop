let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);