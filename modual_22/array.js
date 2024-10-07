const countary = 'Bangladesh';
const age = 24;
const isIndependent = true;
const student = {id:121,class:12,name:'Agun'};
const friends = [13,14,15,17,16,30,20];
const newFrinds = [12,30,40,50,60];

// typeof
console.log(typeof countary);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);

// array chack
console.log(Array.isArray(friends) ? 'array':'Not array');
// array number chack
console.log(friends.includes(40));
console.log(friends.includes(30));
console.log(friends.indexOf(30));


// array concat
console.log(friends.concat(newFrinds));