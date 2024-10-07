class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const kodom = new person('Kodom Ali',21);
console.log(kodom);
// kodom.sleep() 

kodom.activity();

// console.log(this);
// function showThis(){
//     console.log(this);
// }
// showThis(); 