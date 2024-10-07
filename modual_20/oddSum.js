// function oddSum(array){
//     sum = 0
//     for (let i = 0; i < array.length; i ++){
//         if (array[i]%2 != 0){
//             sum += array[i];
//         }
//     }
//     return `Odd number sum : ${sum}`;
// }
// let array = [10,13,14,15,16,17,12,1,9,17,40,45];
// console.log(oddSum(array));

function oddSum(array){
    let odd = [];
    let sum = 0;
    for (let i in array){
        if (array[i]%2 != 0){
            sum += array[i];
            // console.log(array[i])
            odd.push(array[i])
        }
    }
    return `Odd number sum : ${sum}\narray: ${odd}`;
}
let array = [10,13,14,15,16,17,12,1,9,17,40,45];
console.log(oddSum(array));
