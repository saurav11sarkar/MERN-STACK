function canFay(changeArray, totalDeo){
    if (changeArray.length === 0){
        return 'array is empty';
    }
    else{
        sum = 0;
        for(let i = 0; i < changeArray.length; i++){
            sum += changeArray[i];
        }
        return sum >= totalDeo ? true:false;
    }
}

console.log(canFay([1,5,5],10));