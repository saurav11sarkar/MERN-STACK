const shoppingcard = [
    {name:'shoe',price:1200, quentity:2},
    {name:'shirt',price:2200, quentity:5},
    {name:'pant',price:3700, quentity:4},
    {name:'belt',price:700, quentity:3}
]

const totalSum = (shoppingcard) =>{
    let sum = 0;
    for(let i=0;i<shoppingcard.length;i++){
        sum += shoppingcard[i].price * shoppingcard[i].quentity;
    }
    return `Total shopping price : ${sum}`;
}

console.log(totalSum(shoppingcard));