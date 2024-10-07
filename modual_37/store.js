const btn = document.getElementById('btn');

const addStroges = () =>{
    const id = document.getElementById('id');
    const value = document.getElementById('value');

    const idInput = id.value;
    const valueInput = value.value;
    
    if(idInput && valueInput){
        localStorage.setItem(idInput,valueInput);
    }

    id.value = '';
    value.value = '';
}


btn.addEventListener('click', addStroges);