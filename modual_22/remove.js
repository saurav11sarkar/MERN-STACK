// console.log(name.includes('abule'));

function removeDublect(name){
    let array = []
    for(let i = 0; i < name.length; i++){
        if(array.includes(name[i]) == false){
            array.push(name[i])
        }
    }
    return array;
}

const name = ['abule','babul','sabul','dabul','ebul','dabul','abule','kabul','gabul','sabul','abule','babul'];

console.log(removeDublect(name));