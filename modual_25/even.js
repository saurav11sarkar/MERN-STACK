// console.log("This is separate js file");

// function makeRady() {
//     // let rady = document.querySelector("#make-rady");
//     document.body.style.backgroundColor = 'red';
// }

const makePurple = document.getElementById('make-purple');
makePurple.onclick = makesPurpleButton = () =>{
    document.body.style.backgroundColor = 'purple';
}

function makeRady(){
    document.body.style.backgroundColor = 'red';
}

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBuli;
        // console.log(makeBlueButton);
    function makeBuli(){
         document.body.style.backgroundColor = 'blue';
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor = 'green';
})


document.getElementById('make-Goldenrod').addEventListener('click',makeGoldenrod=()=>{
    document.body.style.backgroundColor = 'goldenrod';
})