let intervalID
function stateBtn() {
    const numberElement = document.getElementById('number');
    let num = parseFloat(numberElement.innerText);
    intervalID = setInterval(()=>{
        numberElement.innerText = num++;
    },1000);
}

function stopBtn(){
    clearInterval(intervalID)
}

function resetBtn(){
    if(intervalID){
        clearInterval(intervalID);
    }
    const numberElement = document.getElementById('number');
    numberElement.innerText = '0';
}