document.getElementById('btn-deposit').addEventListener('click', function (){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    // console.log(depositAmount);

    // for non-input(element other than input,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const preDepositTotal = parseFloat(depositTotalElement.innerText);

    const currentDepositTotal = preDepositTotal + newDepositAmount

    depositTotalElement.innerText = currentDepositTotal;

    const balanceTptalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = parseFloat(balanceTptalElement.innerText);
    const currentBalanceTotal = previousBalanceTotalString + newDepositAmount;
    // set
    balanceTptalElement.innerText = currentBalanceTotal;

    depositField.value = ''

});