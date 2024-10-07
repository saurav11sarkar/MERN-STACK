class product{
    constructor (countery){
        this.countery = countery;
    }
    
    speak(tack){
        console.log(`talking about ${tack} ${this.countery}`);
    }
}

const lenovo = new product('Bangladesh');
lenovo.speak('bangla');
// console.log(lenovo);


class Teacher{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log(`${this.name} sir is teacher ${this.subject}`);
    }
}

let tapon = new Teacher('Tapon','Math');
tapon.lecture();