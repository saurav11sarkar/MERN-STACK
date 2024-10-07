function sumArray(list){
    let sum = 0;
    for(let i of list){
        sum += i;
    }
    return sum;
}
let list = [1,2,3,4,5,6,7,8,9];
console.log(sumArray(list));


// function sumArray(list){
//     let sum = 0;
//     let ln = list.length;
//     for (let i = 0; i < ln; i+=1){
//         sum +=list[i];
//     }
    
//     return `All array is sum: ${sum}`;
// }
// let list = [1,2,3,4,5,6,7,8,9];
// console.log(sumArray(list));