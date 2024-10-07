// 1. where to add
const placesList = document.getElementById('places-list');
// console.log(placesList)

// 2.what to be add
const li7 = document.createElement('li');
li7.innerText = 'pahar tuli bon';
// 3.add the child
placesList.appendChild(li7);



const mainContainer = document.getElementById('main-contain');
// console.log(mainContainer)
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);
// mainContainer.appendChild(section)

const ul = document.createElement('ul');
const li5 = document.createElement('li');
li5.innerText = 'birani';
ul.appendChild(li5);


const li6 = document.createElement('li');
li6.innerText = 'ploay';
ul.appendChild(li6);


const li4 = document.createElement('li');
li4.innerText = 'hello';
ul.appendChild(li4);


section.appendChild(ul);
mainContainer.appendChild(section); 

// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shat</li>
    <li>Lungi</li>
    <li>Pant</li>
</ul>
`;
mainContainer.appendChild(sectionDress);

