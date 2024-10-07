function woodCalcuter(chairNumber=null,tableNumber=null,bedNumber=null){
    const chair = 3;
    const table = 10;
    const bed = 50;
    return `Your chair wood ${a = chairNumber*chair} cft. \nYour table wood ${b = tableNumber*table} cft. \nYour bed wood ${c = bedNumber*bed} cft. \nTotal wood = ${a+b+c}`;
}

let chairNumber = 1;
let tableNumber = 1;
let bedNumber = 1;

console.log(woodCalcuter(chairNumber,tableNumber,bedNumber));