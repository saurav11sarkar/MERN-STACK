function factorial(number){
    let mul = 1;
    for (let i = number; i >= 1; i--){
        mul *= i;
    }
    return `${number} factrial: ${mul}`;
}

console.log(factorial(5));
