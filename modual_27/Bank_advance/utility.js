function getInputFileValueById(inputs){
    const inputField = document.getElementById(inputs);
    const inputFieldValueString = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValueString;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = parseFloat(element.innerText);

    return elementString;
}

function setTextElementValueId(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

