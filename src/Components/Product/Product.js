import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'


import './Product.css';

const Product = (props) => {
    const {name, img, price, stock, seller} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    console.log(props);
    return (
        <div className="product">
            <div>

            <img src={img} alt="" srcset="" />

            </div>
            <div>


            <h4 className="product-name">{name}</h4>
            <p><small>By : {seller}</small></p>
            <p>Price: {price}</p>
            <h5>Stock availabe : {stock}</h5>
            <button
            onClick={() => props.handleAddToCart(props.product)}
            className="btn-regular"
            > {element} Add to cart</button>

            </div>
            

        </div>
    );
};

export default Product;