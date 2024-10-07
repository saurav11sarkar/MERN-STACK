const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

function feet(inchee){
    const freets = inchee / 12;
    return freets.toFixed(2);
}

console.log(feet(68));