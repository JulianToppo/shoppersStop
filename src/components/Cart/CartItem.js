import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../utils/CartContext";
import "./CartItem.css";

const CartItem = () => {
  const cartContext = useContext(CartContext);
  const [prodItems, setprodItems] = useState([]);

  useEffect(() => {
    setprodItems(cartContext.items);
  }, [cartContext.items]);

  const onCloseClickHandler=(e)=>{
    e.preventDefault();
    cartContext.toggleDisplay();
  }

  return (
    cartContext.showDisplay && (
      <div>
        <div className="overlay"></div>
        <div className="cartBox">
          <h1>Cart Items</h1>
          {prodItems.map((item) => {
            return (
              <li
                className="items"
                key={item.price + item.itemName + item.size}
              >
                <p>{item.itemName}</p>
                <p>{item.itemDescription}</p> 
                <p>{item.price}</p>
                <p>x{item.count}</p>
               
                <p>{item.size}</p>

                <p>{item.totalPrice}</p>
              </li>
            );
          })}

          <div className="button">
            <button>Total= {cartContext.totalPrice}</button>
            <button onClick={onCloseClickHandler}>Close</button>
          </div>
          
        </div>
      </div>
    )
  );
};

export default CartItem;
