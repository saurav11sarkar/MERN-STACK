const numbers = [1,6,8,4];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// for(const num of numbers){
//     console.log(num);
// }

// let nobab = 'Siraj Ud Doula';
// for(let i of nobab){
//     if(i == ' '){
//         continue
//     }
//     console.log(i);
// }

const glass = {
    name:'glass',
    color:'golden',
    price:12,
    isCleaned:true
}

for(let i in glass){
    console.log(glass[i]);
}

// or

let keys = Object.keys(glass);

for(let i of keys){
    console.log(i,glass[i]);
}