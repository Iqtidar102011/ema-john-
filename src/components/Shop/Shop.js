
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();

    const [cart, setCart] = useState([])
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    useEffect(() => {
        const storedCart = getStoredCart();
        let savedCart = [];
        // storedcart is an object
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // if addedproduct is truthyvalye set the quantity as property value of id
                // step 1 .. set quantity 
                const quantity = storedCart[id];
                // addedProduct is an object which has a property named quantity. so, setting the property name (addedproduct.quantity=)
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = selected => {
        let newCart = [];
        const exists = cart.find(product => product.id === selected.id)
        if (!exists) {
            selected.quantity = 1;
            newCart = [...cart, selected]
        }
        else {
            const rest = cart.filter(product => product.id !== selected.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selected.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/order'></Link>
                    <button>Review order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;