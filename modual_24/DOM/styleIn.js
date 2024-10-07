const sections = document.querySelectorAll('section');
// console.log(sections);
for(let i = 0; i < sections.length; i++){
    sections[i].style.border = '2px solid steelblue';
    sections[i].style.marginBottom = '5px';
    sections[i].style.borderRadius = '5px';
    sections[i].style.paddingLeft = '7px';
    sections[i].style.backgroundColor = 'lightgray';
}

// for(let i = 0; i < sections.length; i++){
//     if(sections[i].classList == 'fruits-container'){
//         console.log(sections[i]);
//     }
// }

let plasesContainer = document.getElementById('plases-container');
// plasesContainer.style.backgroundColor = 'red';
// plasesContainer.classList.add('yello-bg');
console.log(plasesContainer.childNodes);
console.log(plasesContainer.childNodes[3].childNodes[1]);
console.log(plasesContainer.childNodes[3].childNodes[1].nextSibling);



let largeFile = document.querySelector('.fruits-container');
largeFile.classList.remove('large-font');

const li = document.createElement('li');
li.innerText = 'My name is saurav';
let plasecesUl = document.querySelector('#plases-container ul');
plasecesUl.append(li);
const li2 = document.createElement('li');
li2.innerText = 'what is your name';
plasecesUl.append(li2);



