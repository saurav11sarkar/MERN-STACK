const addProduct = () =>{
    const pName = document.getElementById('prodoct-name');
    const pQuelity = document.getElementById('prodoct-quentity');
    

    const product = pName.value;
    const quentity =pQuelity.value;

    displayProduct(product,quentity);
    seveStoresd(product,quentity);

    pName.value = '';
    pQuelity.value = '';
    console.log(product);
    console.log(quentity);
}

const displayProduct =(product,quentity)=>{
    const pContener = document.getElementById('product-container');
    const li = document.createElement('li');

    li.innerText=`${product} : ${quentity}`;

    pContener.append(li);

}

const getStroredShopping = () => {
    const storeCard = localStorage.getItem('card');
    let card = {};
    if(storeCard){
        card = JSON.parse(storeCard);
    }
    return card;
}

const seveStoresd = (product, quentity) => {
    const card = getStroredShopping();
    card[product] = quentity;

    const cardStringFy = JSON.stringify(card);
    console.log(cardStringFy);
    localStorage.setItem('card',cardStringFy);
}

const displayProductLocal = () =>{
    const seveCart = getStroredShopping();
    console.log(seveCart);
    for(let product in seveCart){
        console.log(product,seveCart[product]);
    }
}
displayProductLocal();