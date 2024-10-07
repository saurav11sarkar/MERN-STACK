document.getElementById('btn-withdraw').addEventListener('click', function (){
    const withdrawFile = getInputFileValueById('withdraw-field');

    const withdrowTotal = getElementValueById('withdraw-total');

    const withdrowTotalAmount = withdrowTotal + withdrawFile;
    setTextElementValueId('withdraw-total',withdrowTotalAmount);

    const balanceWithdraw = getElementValueById('balance-total');
    const balance = balanceWithdraw - withdrawFile;
    setTextElementValueId('balance-total',balance);
});