import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Order Summery</h2>
            <p>Selected items : {cart.length}</p>
        </div>
    );
};

export default Cart;