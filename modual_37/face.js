const employe = {
    name: "saurav sarkar",
    age: 34,
    movie: ['KGF','sprider man']
}

const [a,b] = employe.movie;

//console.log(a);
//console.log(b);

const employeJson = JSON.stringify(employe);
//console.log(employeJson);

const numbers = [23,54,67,23,78,90];

const product = [
    {name:'laptop', price:3200, brand:'len',color:'silver'},
    {name:'phone', price:7000, brand:'HTC',color:'golden'},
    {name:'watch', price:3000, brand:'casio',color:'yellow'},
    {name:'sunglass', price:300, brand:'ray',color:'black'},
    {name:'camera', price:9000, brand:'canon',color:'gray'}
]
const newProduct = {name:'webcam',price: 700, brand: 'Lal'};
const addProduct = [...product, newProduct];
//console.log(product);
//console.log(addProduct);

const remaning = product.filter(p => p.name.includes('a'));
//console.log(remaning);

let num1 = 43;
num1 = num1 + ''
//console.log(typeof num1);
num1 = + num1
//console.log(typeof num1);
