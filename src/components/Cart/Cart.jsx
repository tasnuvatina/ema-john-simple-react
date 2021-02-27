import React from 'react';

const Cart = (props) => {
    let cart=(props.cart)
    console.log(cart);
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;    
    }
    let shippingCost =0;
    if(total<=100 && total>50){
        shippingCost=7.99;
    }else if (total<=50 && total>0) {
        shippingCost=12.99;
    }
    let tax=total/10;
    let grandTotal=total + shippingCost+tax;

    let toPeciseNumbers=(number)=>{
        let newNumber=number.toFixed(2);
        return Number(newNumber);
    } 

    return (
        <div>
            <h2>Order summery</h2>
        <h4>Product added to cart: {cart.length}</h4>
        <h4>Product price :{toPeciseNumbers(total)}</h4>
        <p><small>Shipping Cost :{shippingCost}</small></p>
        <p><small>Tax + VAT : {toPeciseNumbers(tax)}</small></p>
        <h3>Total price: {toPeciseNumbers(grandTotal)}</h3>
        </div>
    );
};

export default Cart;