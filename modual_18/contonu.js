// var list = []
// for(var i = 0; i <= 100; i++){
//     list.push(i)
// }
// console.log(list)

var list = [45,87,56,32,51,25,188,41,25,98]

for (var i = 0; i < list.length; i++){
    var number = list[i]
    if (number > 50){
        continue;
    } 
    console.log(number) 
}