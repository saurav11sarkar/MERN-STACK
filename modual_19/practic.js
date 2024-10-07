// ------------1------------
function f0o(){
    console.log('foo');
    bar();
}
function bar(){
    console.log('bar');
}

f0o();

// --------------2-------------
function make_avg(num1,num2,num3){
    var average = num1+num2+num3;
    return average / 3
}
console.log(make_avg(10,20,30));

// --------------3--------------
function make_avg(arr,size){
    if (size <= 0){
        return 0;
    }else{
        var sum = 0;
        for (var i = 0; i < size; i++){
            sum += arr[i]
        }
        return sum/size;
    }
}

var arr = [12,23,45,67,89]
console.log(make_avg(arr,arr.length));

// -----------------4-----------------
function odd_even(n){
    if (n%2 == 0){
        return `${n} is even number`;
    }else{
        return `${n} is odd number`;
    }
}
console.log(odd_even(12));

// ----------------5----------------
var signal = 'red';
switch (signal) {
    case 'green':
        console.log('You can cross the road.');
        break;
    case 'yellow':
        console.log('You should stop.');
        break;
    case 'red':
        console.log('You may be in danger if you try to cross.');
        break;
    default:
        console.log('Invalid signal color.');
}