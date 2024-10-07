function million(kilo){
    const kilomiter = kilo * 1.60934;
    return kilomiter.toFixed(3);
}

console.log(million(1))