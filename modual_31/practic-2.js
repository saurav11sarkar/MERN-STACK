// problam - 1

let number = [1,3,5,7,9];

let evenConvert = number.map((n) => n+1);
console.log(evenConvert);

// let append = []
// for(let i of number){
//     append.push(i += 1);
// }
// console.log(append);

// problam - 2

let list = [33,50,79,78,90,101,30];

let divisore = list.filter((n)=> n % 10 === 0);
console.log(divisore);

let filted = list.find(n=> n % 10 == 0);
console.log(filted);

// problam - 3 
const instructor = [
    {name:'Nodi',age:28,position:'Senior'},
    {name:'Akil',age:26,position:'Junior'},
    {name:'Shobuj',age:30,position:'Senior'},
];

const nameTecher = instructor.filter((n) => n.position === 'Senior');
const names = nameTecher.map(n => n.name);
console.log(names);

// for(let i = 0; i < nameTecher.length; i++){
//     console.log(nameTecher[i].name);
// }

// problam - 4
const people = [
    {name: 'Meena',age:20},
    {name: 'Rina',age:15},
    {name: 'Suchorita',age:22}
]
const totalAge = people.map(n => n.age)
const totalSum = totalAge.reduce((pre,curn) =>pre+curn,0);
console.log(totalSum);
