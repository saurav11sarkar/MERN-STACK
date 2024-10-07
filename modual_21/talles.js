function maxArray(number){
    let max = 0
    for(let i = 0; i < number.length; i++){
        if (max < number[i]){
            max = number[i];
        }
    }
    return max;
}
const hegihts = [145,456,123,345,6,78,908,145,1000].reverse();
console.log(hegihts);
console.log('tallest person is : ',maxArray(hegihts));

