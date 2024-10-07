const findAddress = (obj) => {
    let street = obj.street || '__';
    let house = obj.house || '__';
    let earth = obj.Earth || '__';
    return `${street} , ${house} , ${earth}`;
}

let obj ={
    street:'10',
    // house:'15A',
    // Earth:'perfect'
}

console.log(findAddress(obj));