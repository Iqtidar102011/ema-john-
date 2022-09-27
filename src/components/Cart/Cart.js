import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const quantity = cart.reduce((previous, current) => previous + current.quantity, 0)

    const total = cart.reduce((previous, current) => previous + current.price * current.quantity, 0)
    // console.log(quantity, total)
    const shipping = cart.reduce((previous, cart) => previous + cart.shipping, 0)
    const taxString = (total * 0.1).toFixed(2)
    const tax = parseFloat(taxString)
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected items : {quantity}</p>
            <p>Total price:${total}</p>
            <p>Shipping:${shipping}</p>
            <p>Tax:${tax}</p>
            <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;