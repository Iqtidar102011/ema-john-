import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, previousCart } = useLoaderData();
    // here useloaderdara() gives us obejct , so we destructured it
    const [cart, setCart] = useState(previousCart);
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    const handleRemove=(id)=>{
        const remaining=cart.filter(product=>product.id!==id);
        setCart(remaining);
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product=><ReviewItem key={product.id} product={product} handleRemove={handleRemove}></ReviewItem>)
                }
             {/* conditional rendering if the cart is empty */}
             {
                cart.length===0 && <h2>Nothing to review!</h2>
             }

            </div>
            <div className='cart-container'>

                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/shipping'>
                    <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;
// 
// যেহেতু Orders page এর দুইটা পার্ট থাকবে, এবং একটি অংশে shop.js এ ডিজাইন করা cart টাকে আমরা দেখাতে চাই, সেহেতু এখানে একটা state declare করে নিতে হবে, কারণ user চাইলে cart থেকে কোনো একটা add করা প্রোডাক্ট চাইলে remove ও করতে পারে। সেজন্য আগে থেকে বানানো <Cart> component টাকে এখানে import করে নেয়া হলো। এবং সেটার props হিসেবে updated cart টাকে সেন্ড করে দেয়া হয়েছে। 
