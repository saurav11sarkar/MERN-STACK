var shoopingCard = {
    book:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes:2
}

// array
var shoppingItem = ['book','sunglass','keyboard','mouse','pen','shoes'];

var keyes = Object.keys(shoopingCard)
for (var i = 0; i < keyes.length; i++){
    var porpotiName = keyes[i];
    var porpotiValues = shoopingCard[porpotiName];
    console.log(porpotiName,porpotiValues);
}

// or
for(var i in shoopingCard){
    console.log(i,'=',shoopingCard[i]);
}