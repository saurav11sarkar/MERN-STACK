function tryCatch(){
    const ageField = document.getElementById('input-value');
    const ageText = ageField.value;
    const showTextErro = document.getElementById('show');
    const error = document.getElementById('error');
    
    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please Enter a number";
        }else if(age < 18){
            throw "Not allowed Only 18+!"
        }else if(age > 30){
            throw "Bura manush ekhane asen na";
        }else{
            throw 'Your age grate age';
        }
    }
    catch(err){
        error.innerHTML = `${err}.`;

    }
    finally{
        showTextErro.innerHTML = "<p> ALL Done try Catch </p>" ;
    }

    ageField.value = '';
}