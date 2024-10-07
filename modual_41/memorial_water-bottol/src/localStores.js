function getStore() {
    const storeCard = localStorage.getItem('cart');
    if (storeCard) {
        return JSON.parse(storeCard)
    }
    return [];
}

const seveCart = (cart) => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString)
}

const addToLS = (id) => {
    const cart = getStore();
    cart.push(id)
    seveCart(cart)
}

const removeStro = (id) =>{
    const cart = getStore();
    // removing evry id
    const remeining = cart.filter(idx => idx !== id);
    seveCart(remeining)
}

export { addToLS, getStore, removeStro }