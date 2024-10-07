const actor = {
    name : 'Ananata',
    age : 30,
    phone : '01717653844',
    money: 1230000
}
console.log(actor.phone);
const {phone} = actor;
const {age,name:boyes} = actor;
console.log(phone);
console.log(boyes);

const numbers = [45,99];
const [first,secend] = numbers;

console.log(first,secend);

const [x,y] = [12,13];
console.log(x);
console.log(y);

function doubleThem(a,b){
    return [a*2,b*2];
}
const [a,s] = doubleThem(10,20);
console.log(a);
console.log(s);


