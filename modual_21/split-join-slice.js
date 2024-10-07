let lyrics = "There are many variations. of passages of Lorem Ipsum. available, but. the majority have suffered alteration. in some form, by injected humour, or randomised. words which don't look even slightly believable."

// console.log(lyrics);
let parte = lyrics.split('.');
console.log(parte);

// let char = lyrics.split('');
// console.log(char);

let parties = lyrics.slice(10,20);
console.log(parties);
console.log('--------------------------------');

console.log(lyrics.at(10));

console.log('--------------------------------');

const x = '  hello world  ';
console.log(x.trim());

console.log('--------------------------------');

let a = 'hello';
let y = 'word';

console.log(a.concat(' ',y));

console.log('--------------------------------');
a = [
    'There are many variations',
    ' of passages of Lorem Ipsum',
    ' available, but',
    ' the majority have suffered alteration',
    ' in some form, by injected humour, or randomised',
    " words which don't look even slightly believable",
    ''
  ];

console.log(a.join("😂"));



