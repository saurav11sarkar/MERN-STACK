console.log(1);
let num = 0
let interverId = setInterval(()=>{
    console.log(++num);
    if(num === 10){
        clearInterval(interverId)
    }
},1000);
console.log(3);

// setTimeout(()=>clearInterval(interverId),5000);