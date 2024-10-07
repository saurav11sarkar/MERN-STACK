// let numbers = [10,20,30,45,56];

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }
// console.log("------------------")
// for(let i of numbers){
//     console.log(i)
// }

const products = [
    {id:1,name:'xiami phone one nigth',price:19000},
    {id:2,name:'iphone',price:19000},
    {id:3,name:'mac book air',price:19000},
    {id:4,name:'lenove yoga laptop 2025',price:19000},
    {id:5,name:'dell inspiron laptop',price:19000},
    {id:6,name:'samsung phone note 7',price:19000},
    {id:7,name:'Nokia old age phone gone phone',price:19000},
    {id:8,name:'Phone one',price:19000},
]

function matchedproduct(products,search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

console.log(matchedproduct(products,'phone'));