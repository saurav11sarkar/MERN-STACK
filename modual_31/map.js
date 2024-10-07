const numbers = [4, 5, 2, 8, 10];

// let list = [];
// for(let i = 0; i < numbers.length; i++){
//     list.push(numbers[i] ** 2);
// }
// console.log(list);

const result = numbers.map((num)=>num**2);
console.log(result);

let friends = ['Tom','John','Micheal','Oliver'];

friends = friends.map(array =>array.length);
console.log(friends);