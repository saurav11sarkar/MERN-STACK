document.getElementById('btn-deposit').addEventListener('click', function (){
    const newDepositAmount = getInputFileValueById('deposit-field');
    const newElementAmount = getElementValueById('deposit-total');
    
    const newDepositTotal = newElementAmount + newDepositAmount;
    setTextElementValueId('deposit-total',newDepositTotal);

    const previousBlanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBlanceTotal + newDepositAmount;
    setTextElementValueId('balance-total',newBalanceTotal);

})