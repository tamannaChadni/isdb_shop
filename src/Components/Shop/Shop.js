import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

function Shop() {
    const [product,setProduct] = useState([]);

    const [cart,setCart] = useState([]);




    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])


    const handleAddToCart = (product) => {
        // console.log('clicked');
        const newCart =[...cart, product];
        setCart(newCart);

    }






    return (
        <div className="shop-container">
            <div className="product-container">
                {/* <h3>Product: {product.length}</h3> */}
                {
                    product.map( product=> <Product 
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }



            </div>
            <div className="cart-container">
                
                <Cart cart={cart}></Cart>


            </div>

            
        </div>
    );
}

export default Shop;