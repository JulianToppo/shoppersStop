import { createContext } from "react";


const CartContext=createContext(
    {
        items:[],
        totalPrice:0,
        addItems:(item)=>{},
        showDisplay:false,
        toggleDisplay:false
    }
)

export default CartContext;


