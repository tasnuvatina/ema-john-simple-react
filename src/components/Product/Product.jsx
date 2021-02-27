import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    console.log(props.product)
    let {name,img,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>By {seller}</p>
                <h4>${price}</h4>
                <p>Only {stock} pieces left in stock</p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="add-cart-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;