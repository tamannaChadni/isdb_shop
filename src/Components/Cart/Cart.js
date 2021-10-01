import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shipping = total >0 ? 20 : 0;
    const  tax = (total+shipping)*0.10;
    const grandTotal = total + shipping + tax;


    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <h3>Item-Order : {props.cart.length}</h3>
            <p>Tax :{tax.toFixed(2)}</p>
            <p>Shipping :{shipping}</p>
            <br />
            <h3>Total : {grandTotal.toFixed(2)}</h3>

            
        </div>
    );
};

export default Cart;