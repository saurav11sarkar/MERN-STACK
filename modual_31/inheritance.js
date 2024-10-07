class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('Gari chole na chole na re');
    }
}

class Bus extends Vehicle{
    constructor(name,price,seat,ticketprice){
       super(name,price);
       this.seat = seat;
       this.ticketprice = ticketprice;
    }

}

class Track extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }

}

const car = new Vehicle('BMW',50000);
const myBus = new Bus('Volvo',40,30,5);
const myTrack = new Track('Freightliner',1000,500);

console.log(car);
console.log(myBus);
console.log(myTrack.load);