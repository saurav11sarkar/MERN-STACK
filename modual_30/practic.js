// number1
const array = (a,b,c) => a*b*c;
console.log(array(12,13,14));

// number2
let threeLine = `I am a web developer.
I love to code.
I love to eat birani.
`;
console.log(threeLine);

// munber3
/*write an arrow function that  will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the Result.*/

let addTwopramater = (num1,num2=5) => num1 + num2;
console.log(addTwopramater(10));

// number4
let name = ['saurav','sarkar','hi','hello'];
let [name1,name2,...name3] = name;
console.log(name1);
console.log(name2);
console.log(name3);


// number5
const friend={
    1:'saurav',
    2:'sarkar',
    3:'virat',
    4:'mashud',
    5:'muktar',
    6:'ali'
};

let list = [];
for(let i in friend){
    if(friend[i].length % 2 === 0){
        list.push(friend[i])
     }
}

console.log(list);

// number6
let averages = function (array){
    let newArray = [];

    for(let i of array){
        newArray.push(i**2);

    }

    console.log(newArray);

    let sum = 0;
    for (let i of newArray){
        sum += i;
    }
    console.log(sum);

    return sum / array.length;

}

let arrays = [10,20,30,40,50,60,70,80];
console.log(averages(arrays));

// number7

let number7 = (array1,array2) =>{
    let list;
    list = [...array1,...array2];
    console.log(list);

    return Math.max(...list);
}

let arry1 = [12,13,24,56,78,1,3];
let arry2 = [2,103,284,5,8,1,3];

console.log(number7(arry1,arry2));


