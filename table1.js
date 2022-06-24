let n=require("readline-sync");
let num=n.questionInt("enter number: ");
let i=1
while (i<=num){
    let j=1
    while (j<=10){
        let multi = i*j
        console.log(i,"*",j,"=",multi)
        j++
    }
    i++
}

