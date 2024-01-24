import React, { useContext, useEffect } from "react";
import ProductContext from "../../utils/ProductContext";
import { useState } from "react";
import "./ProductDetails.css";
import CartContext from "../../utils/CartContext";


const ProductDetails = () => {
  const cartContext = useContext(CartContext);
  const productContext = useContext(ProductContext);
  const [prodItems, setprodItems] = useState([]);

  useEffect(() => {
    setprodItems(productContext.products);
  }, [productContext.products]);

  const onClickQuantityHandler=(item,size)=>{
    
    console.log(item,size)
    const cartProdItem={
      itemName:item.Tshirt,
      itemDescription:item.tshirtDescription,
      count:1,
      price:item.price,
      size:size,
      totalPrice:parseInt(item.price)
    }
    cartContext.addItems(cartProdItem);
    productContext.alterQuantity(item,size);
    console.log(cartContext)
  }

  return (
    <div className="productSection">
      <h1>Products</h1>
      {prodItems.map((item) => {
        return (
          <li className="items" key={item.price + item.Tshirt}>
            <p>{item.Tshirt}</p>
            <p>{item.tshirtDescription}</p>
            <p>
                {item.price}
            </p>
            <div className="quantitybuttons">
          
              <button
                onClick={()=>onClickQuantityHandler(item,"large")}
              >
                Buy Large{item.largeQuantity}
              </button>
              <button onClick={()=>onClickQuantityHandler(item,"medium")}>
                Buy Medium{item.mediumQuantity}
              </button>
              <button onClick={()=>onClickQuantityHandler(item,"small")}>
                Buy Small{item.smallQuantity}
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default ProductDetails;
