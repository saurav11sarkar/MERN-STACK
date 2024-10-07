function sortMaker(arrays){

    for(let i = 0; i < arrays.length; i++){
        
        let array = arrays[i]

        if(array[0] < 0 || array[1] < 0){
            return `Invalid input`;
        }
        else if(array[0] < array[1]){
            temp = array[1];
            array[1] = array[0];
            array[0] = temp;
            return array;
        }
        else if(array[0] === array[1]){
            return `equal!`;
        }
        else{
            return array;
        }
    } 
}

let array = [[1,3]];
console.log(sortMaker(array));