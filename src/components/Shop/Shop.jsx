import React, { useState } from 'react';
import Product from "../Product/Product"
import fakeData from "../../fakeData"
import "./Shop.css"
import Cart from '../Cart/Cart';

const Shop = () => {
  console.log(fakeData);
  const fristTen = fakeData.slice(0, 10);
  let [products, setProducts] = useState(fristTen);
  let [cart,setCart]=useState([]);

  let handleAddProduct=(product)=>{
      console.log(product);
      const newCart=[...cart,product];
      setCart(newCart);
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {
            products.map((pd) => (<Product handleAddProduct={handleAddProduct} product={pd}></Product>))
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Shop;