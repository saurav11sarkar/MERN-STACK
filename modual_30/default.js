function add(num1=0,num2=0){
    let result = num1 + num2
    console.log(num1,num2,result);
}

add(20);

let add2 = function(a,b){
    return a+b;
}

console.log(add2(10,34));
let add3 = (a,b) => a+b;
console.log(add3(30,50));

