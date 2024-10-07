// ---------------1------------------
var fruits = ["Apple","Banna","Orange"]

console.log(fruits.indexOf('Banna'))

fruits[1] = "Mango"
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.push('Watermelon')
console.log(fruits)

// ------------------2----------------
var total = 90

if (total >= 80){
    console.log("A")
}else if(total >= 60){
    console.log("B")
}else if(total >= 50){
    console.log("C")
}else if(total >= 40){
    console.log("D")
}else{
    console.log("F")
}

// -----------------------3-----------
var a = 13
var b = 79
var c = 45

if (a>b && a>b){
    console.log('a')
}else if(b>a && b>c){
    console.log("b")
}else{
    console.log("c")
}

// --------------------or----------
var x = 9
var y = 8
var z = 9

if (x == y || x == z || y == z){
    console.log("equal")
}else{
    console.log("not equal")
}