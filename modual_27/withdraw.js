document.getElementById('btn-withdraw').addEventListener('click',function (){
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = parseFloat(withdrawAmount.value);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = parseFloat(withdrawTotal.innerText);

    const toalWithdraw = withdrawAmountString + withdrawTotalString;
    withdrawTotal.innerText = toalWithdraw;

    withdrawAmount.value = '';

    const tatalBalance = document.getElementById('balance-total');
    const totalBalanceString = parseFloat(tatalBalance.innerText);
    
    const withdrawBalnace = totalBalanceString-withdrawAmountString;
    tatalBalance.innerText = withdrawBalnace;

})