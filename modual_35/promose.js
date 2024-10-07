// const getData = new Promise((resolve, reject) => {
//     reject('55560');
// });

// getData
//     .then(data => console.log(data + 10))
//     .catch(err => console.log("Err:", err));

const callData = new Promise((resolve, reject) =>{
        let num = Math.floor(Math.random()*10);
        console.log(num);
        if(num > 5){
            resolve(10200);
        }else{
            reject('No Data Available');
        }
})

callData
    .then(data => console.log(data + 30))
    .catch(err => console.log('Err : ',err));

