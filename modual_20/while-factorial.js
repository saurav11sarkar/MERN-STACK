function whileFactorial(number){
    let mul = 1;
    let loop = 1;
    while(loop <= number){
        mul *= loop;
        loop++;
    }
    return mul;
}


let number = 5;
console.log(whileFactorial(number));