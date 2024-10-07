function divisible(number){
    let array = [];
    for(let i = 1; i<=number;i++){
        if(i%3 === 0 && i%5 ===0){
            array.push('foobar');
        }else if(i%3 == 0){
            array.push('foo');
        }else if(i%5 == 0){
            array.push('bar');
        }else{
            array.push(i)
        }
    }
    return array.toString();
}
console.log(divisible(50));