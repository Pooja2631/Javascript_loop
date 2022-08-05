// let i=10
// let s=1
// while (i<=100){
//     let j=s
//     while(j<=i){
//         console.log(j)
//         j++
//     }i=i+10
//     s=s+10
//     console.log()
// }

let i=10
let s=1
let string=""
while (i<=100){
    let j=s
    while(j<=i){
        // console.log(j)
        string+=j
        j++
        console.log(string)
    }string+="\n"
    j++
    i=i+10
    s=s+10
}