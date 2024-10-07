function cubeNumber(number){
    if(typeof number !== 'number'){
        return "Not a curret number";
    }
    return number ** 3;
}

console.log(cubeNumber('4'));
