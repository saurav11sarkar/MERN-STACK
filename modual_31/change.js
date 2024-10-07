let data = [{id:1,name:'abul',address:'kochu khet'}];
let value = data[0];
console.log(value.address);

const products = {
    count:5000,
    data:[
        {id:1,name:'lenovo laptop',price:65000},
        {id:2,name:'hp laptop',price:69000},
        {id:3,name:'asus laptop',price:96000},
    ],

};

console.log(products.data[1].price);

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}
console.log(user2.address.streed?.secend);