// const user = {id:1,name:'Gorib Amir',job:'actor'}

// // JavaScript Object Notation (JSON).
// const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop ={
    owner: 'Alia',
    address:{
        street:'kochukhet voot er goli',
        city:'ranbir',
        country:'BD'
    },
    products:['laptop','mic','monitor','keyboard'],
    revenue: 45000,
    isOpen:false
}

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopObj = JSON.parse(shopJson);
console.log(shopObj);


// const users = {
//     id : 1,
//     name : "Gorib Aamir",
//     job : "Actor"
// }

// let jsonstr = JSON.stringify(users);
// console.log(typeof jsonstr);

// let jsonobj = JSON.parse(jsonstr);
// console.log(typeof jsonobj);