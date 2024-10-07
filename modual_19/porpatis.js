var shoopingCard = {
    book:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}
console.log(shoopingCard['mouse','book']); 

var penCount = shoopingCard.pen;
console.log(penCount);

var properties = Object.keys(shoopingCard);
var properties2 = Object.values(shoopingCard);
console.log(typeof properties)
console.log(properties)
console.log(properties2)

var ider = 'mouse';
var propertyValue = shoopingCard[ider]
console.log(ider,propertyValue);