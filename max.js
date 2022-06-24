let c=require("readline-sync");
let num1=c.questionInt("enter loop time: ");
var maxi=0;
let lis=[ ]
for (let i=1;i<=num1;i++) {
   let num=c.questionInt("enter number: ")
   lis.push(num)
}
console.log(lis)

var maxi=lis[0];
for (let j=0;j<lis.length;j++) {
   if (lis[j]>maxi) {
       maxi=lis[j]
   }
}
console.log(maxi)
