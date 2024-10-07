const nayok = {
    name:"Saurav sarkar",
    id:121,
    address:'movies cinema',
    isString: true,
    friends:['Apu','Raj','Salman','Ashik'],
    movies:[{name:'no.1',year:2015},{name:'king kharba',year:2020 }],
    act:function(){
        console.log('acting like Sakib khain');
    },
    car:{
        brand:'tesla',
        price:50000000,
        model:2025,
        manufacturer:{
            name:'tesla',
            ceo:'Elon Mask',
            countary:'USA'
        }
    }
}

console.log(nayok.car.manufacturer.ceo);
console.log(nayok.act());