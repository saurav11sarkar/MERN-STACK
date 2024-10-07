document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountString = parseFloat(depositAmount.value);

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalString = parseFloat(depositTotal.innerText);

    const cuurrentAmount = depositAmountString + depositTotalString;
    depositTotal.innerText = cuurrentAmount;

    depositAmount.value = '';

    const balanceTotalDeposites = document.getElementById('balance-total');
    const balanceTotalDepositesString = parseFloat(balanceTotalDeposites.innerText);

    const totalDepositeAmount = balanceTotalDepositesString + depositAmountString;
    balanceTotalDeposites.innerText = totalDepositeAmount;

});


// let hello = abc = () =>{
//     const x = 10;
//     const y = 10;
//     const c = x + y;
//     console.log()
// }