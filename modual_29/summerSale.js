// recapeFuncrt
function reCallFunction(name){
    const beforeCoupon = document.getElementById('home');
    const count = beforeCoupon.childElementCount;
    const p = document.createElement('p');
    p.classList.add('text-black');
    p.innerHTML = `${count+1} ${name}`;
    beforeCoupon.appendChild(p);
}

function reCallTota(even, price, discount, total) {
    const kithen = document.getElementById(even);
    const kithenText = parseFloat(kithen.innerText);

    const totalPrice = document.getElementById(price);
    const totalPriceText = parseFloat(totalPrice.innerText);

    let totalPricetota = kithenText + totalPriceText;
    totalPrice.innerText = totalPricetota.toFixed(2);


    // cuppon stystem

    const cupponBtn = document.getElementById('cuppon-button');
    const discountPrice = document.getElementById(discount);

    if (totalPricetota >= 200) {
        cupponBtn.removeAttribute('disabled');
        cupponBtn.classList.add('bg-pink-500');
    } else {
        cupponBtn.setAttribute('disabled', 'true');
        cupponBtn.classList.remove('bg-pink-500');
    }

    const netDiscount = document.getElementById(total);
    netDiscount.innerText = totalPricetota;

    cupponBtn.addEventListener('click', function () {
        const cupponNumber = document.getElementById('cuppon-number');
        const totalDiscountDibe = cupponNumber.value === 'SELL200' ? totalPricetota * 0.20 : 0;
        discountPrice.innerText = totalDiscountDibe.toFixed(2);

        const totalPriceDiscount = totalPricetota - totalDiscountDibe;
        totalPricetota = totalPriceDiscount; // Update the total price
        const updatedTotal = document.getElementById(total);
        updatedTotal.innerText = totalPricetota.toFixed(2);
    });

    document.getElementById("parcese").disabled = false;
}



// kitchenware
function kitchenwareCoupon(){
    reCallFunction('Kitchenware');
    reCallTota('kichen','total-taka','discount','total');

}
// H. Accessories
function homeAccessories(){
    reCallFunction('H. Accessories');
    reCallTota('homes','total-taka','discount','total');
}
// Home Cooker
function cookerAccessories(){
    reCallFunction('Home Cooker');
    reCallTota('cookerer','total-taka','discount','total');
}

// Sports

function sportsAccessories(){
    reCallFunction('Sports Black Cap');
    reCallTota('cap','total-taka','discount','total');
}

// Jersey
function jerseyAccessories(){
    reCallFunction('Full Jersey Set');
    reCallTota('jersey','total-taka','discount','total');
}

// Sports cates
function catesAccessories(){
    reCallFunction('Full Jersey Set');
    reCallTota('cates','total-taka','discount','total');
}

// Single Relax Chair
function chairAccessories(){
    reCallFunction('Full Jersey Set');
    reCallTota('chair','total-taka','discount','total');
}

// Children play
function childrenAccessories(){
    reCallFunction('Full Jersey Set');
    reCallTota('play','total-taka','discount','total');
}

// Flexible Sofa
function flexibleAccessories(){
    reCallFunction('Full Jersey Set');
    reCallTota('sofa','total-taka','discount','total');
}