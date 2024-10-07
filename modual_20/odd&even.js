function oddEven(number){
    if (number%2 === 0){
        return `${number} is even number`;
    }else{
        return `${number} is odd number`;
    }
}

const number = 13;
const chack = oddEven(number);
console.log(chack);