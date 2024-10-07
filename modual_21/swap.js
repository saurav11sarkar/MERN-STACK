let first = 5;
let secend = 7;


let temp = first;
first = secend;
secend = temp;
console.log(first,secend);


first = 5;
secend = 7;
[first,secend] = [secend,first]
console.log(first,secend);
