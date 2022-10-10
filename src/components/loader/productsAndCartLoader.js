import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json()

    // get cart
    // 1. get saved cart from fake db 
    const savedCart = getStoredCart();
    const previousCart = [];
    // savedCart is a object 
    // loop through savedcart to get the product id
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }
    return { products, previousCart };
}