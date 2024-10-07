document.getElementById('btn-apply').addEventListener('click', function (){
    const cupponCode = document.getElementById('cuppon');
    const cupponCodeApplay = cupponCode.value;

    if(cupponCodeApplay === 'ABC11'){
        const mainPrice = document.getElementById('price')
        const mainPriceString = parseFloat(mainPrice.innerText);
        const discountPrice = mainPriceString * 0.30;
        const totalPrice = mainPriceString - discountPrice

        const discount = document.getElementById('discount-Price');
        discount.innerText = totalPrice;
    }else{
        const mainPrice = document.getElementById('price')
        const mainPriceString = parseFloat(mainPrice.innerText);
        
        const discount = document.getElementById('discount-Price');
        discount.innerText = mainPriceString;
        alert('invalid code');
    }

    cupponCode.value = '';
});