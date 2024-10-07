let fibo = [0,1];
for(let i = 2; i <= 15; i++){
    fibo[i] = fibo[i-1]+ fibo[i-2];
}
console.log(fibo);

let array = ['spriderman','thor','halk','ironman'];
let list = [];
for (let i = 0; i < array.length; i++){
    list.push(array[i][0].toUpperCase()+array[i].slice(1));
}
console.log(list.join(' '));

