const products = [
    {id:1,name:'lenovo',price:65000},
    {id:2,name:'dell',price:45000},
    {id:3,name:'hp',price:40000},
    {id:4,name:'mac',price:150000},
];
// map
const names = products.map(pro => pro.name);
console.log(names);

// foreach
products.forEach(p => console.log(p.id));

// filter
const expencipe = products.filter(x => x.price > 50000);
console.log(expencipe);

// find
const affordaable = products.find(x => x.price < 50000);
console.log(affordaable);

// reduse 
const acumaleter = products.reduce((p,c) => p + c.price,0);
console.log(acumaleter);

