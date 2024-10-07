function factorial(number){
    let mul = 1;
    for (let i = 1; i <= number; i++){
        mul *= i;
    }
    return `${number} factrial: ${mul}`;
}

console.log(factorial(5));
