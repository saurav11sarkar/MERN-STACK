  function isLeapYear(year){
    if(year%4 === 0){
        return `Your year is leap year ${year}`;
    }else{
        return `Your year is not a leap year ${year}`;
    }
}

let year = 2024;
console.log(isLeapYear(year));