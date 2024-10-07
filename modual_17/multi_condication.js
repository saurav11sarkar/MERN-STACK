var money = 100
var danishPrice = 450
var butterbreand = 350
var toasBiscuit = 200


if (danishPrice < money){
    console.log('Dan Dan danish khabo')
}else if(butterbreand < money){
    console.log('Butterbon khabo')

}else if(toasBiscuit < money){
    console.log('toaseBiscuit khabo')
}else{
    console.log("Monay is low")
}

// nested-condition 

var x = `hi 
my name is 
saurav!❤️`
// --------------
console.log(x)
var math = true
var geometry = true

if (math == true){
    if(geometry == false){
        console.log("hello saurav")
    }else{
        console.log('baka pothe cholbe')
    }
}else{
    console.log("pithogmatic hoite parba na")
}

// --------------
var destination = ['sajek', 'coxsbazer', 'nepal', 'bali', 'SP']

console.log(destination[2])

destination[2] = 'thailand'
var index = destination.indexOf('SP')
console.log(index)

console.log(destination[2])

destination.push('india')
console.log(destination)

destination.pop()
console.log(destination)

destination.shift()
console.log(destination)

destination.unshift('hi','hello')
console.log(destination)

console.log(destination.slice(2,4).reverse())


