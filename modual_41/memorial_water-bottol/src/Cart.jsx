import PropTypes from 'prop-types';
const Cart = ({ cart, handleRemoveToCart }) => {
    return (
        <div>
            <p><center>cart: {cart.length}</center></p>
            <div className="flex gap-2 w-20 justify-center items-center m-auto">
                {
                    cart.map(bottal => <div key={bottal.id} className="w-full">
                        <img key={bottal.id} className="w-full rounded-3xl" src={bottal.img}></img>
                        <button className='btn mt-1 rounded-3xl' onClick={() => handleRemoveToCart(bottal.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveToCart: PropTypes.func.isRequired
}

export default Cart;