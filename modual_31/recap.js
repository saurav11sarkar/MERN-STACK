const {x,y,...other} = {
    x:2,
    y:5,
    z:3,
    name:'ovijeet',
    age:55
}

console.log(other);
let [a,,c,...list] = ['ram','jutu','midu','kudu','labu'];
console.log(a);
console.log(c);
console.log(list);