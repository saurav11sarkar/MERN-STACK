const glass = {
    name:'glass',
    color:'golden',
    price:12,
    isCleaned:true
}

// console.log(Object.keys(glass));
// console.log(Object.values(glass));
// console.log(Object.entries(glass));
// console.log(glass);
// // delete glass.isCleaned;
// // console.log(glass);

// const {isCleaned,...shortGlass} = glass;
// console.log(shortGlass);
Object.freeze(glass);
glass.souse = 'Bangladesh';
console.log(glass);


