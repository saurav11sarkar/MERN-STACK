document.getElementById('btn-submit').addEventListener('click', function (){
    // get the email address inside the email input field

    // alywes remember to use .value to get text from an infut field.
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // verify email & password
    if(email.endsWith('@gmail.com') && password === '1234'){
        window.location.href = 'bank.html';
    }else{
        alert('invalid user');
    }
    emailField.value = '';
    passwordField.value = '';
});