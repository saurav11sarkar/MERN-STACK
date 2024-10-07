const phones = [
    {name:'Samsung',camera:12,storange:'32gp',price:3600,color:'silver'},
    {name:'Walton',camera:10,storange:'32gp',price:2200,color:'black'},
    {name:'iphone',camera:10,storange:'32gp',price:8200,color:'blue'},
    {name:'Xaomi',camera:10,storange:'32gp',price:5200,color:'red'},
    {name:'Oppo',camera:10,storange:'32gp',price:2000,color:'white'},
    {name:'Nokia',camera:10,storange:'32gp',price:4400,color:'purple'},
    {name:'HTC',camera:10,storange:'32gp',price:6200,color:'green'},
]

function cheapestPhone(phones){
    let cost = phones[0];
    for(let i=0;i<phones.length;i++){
        const phone = phones[i];
        if (cost.price > phone.price){
            cost = phone;
        }
    }
    return cost;
}

console.log(cheapestPhone(phones));