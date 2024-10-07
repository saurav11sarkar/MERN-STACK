// function reversString(text){
//     let reves = '';
//     for (let i = text.length-1; i>=0; i--){
//         let strings = text[i];
//         reves = reves + strings
//     }
//     return reves;
// }
// let myString = 'I am a good boy';
// console.log(reversString(myString));

function reverseWord(str){
    let word = str.split(' ');
    let list = []
    for(let i = word.length-1; i >= 0; i--){
        list.push(word[i]);
    }
    return list.join(' ');
}

let word = 'I am a good boy';
console.log(reverseWord(word));