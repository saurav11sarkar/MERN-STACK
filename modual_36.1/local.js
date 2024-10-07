function addProduct(){
    const productName = document.getElementById('product-name');
    const productQuelity = document.getElementById('product-quelity');

    const productValueName = productName.value;
    const productvalueQuelity = productQuelity.value;

    display(productValueName,productvalueQuelity);
    setLocalstro(productValueName,productvalueQuelity);

    productName.value = "";
    productQuelity.value = "";

    console.log(productValueName,productvalueQuelity);
}

const display = (product,quelity) =>{
    const ul = document.getElementById('list');
    const li = document.createElement('li');

    li.innerText = `${product} : ${quelity}`;

    ul.appendChild(li);
}


const getLocalstro = () => {
    let cart = {};
    const storeCard = localStorage.getItem('cart');

    if(storeCard){
        cart = JSON.parse(storeCard);
    }
    return cart;
}

const setLocalstro = (product, quelity) =>{
    const cart = getLocalstro();

    cart[product] = quelity;
    const setString = JSON.stringify(cart);
    localStorage.setItem('cart',setString);
}
 
const displayGetProduct = () =>{
    const getCard = getLocalstro();
    for(let i in getCard){
        console.log(i,get[i]);
    }
}

displayGetProduct();
