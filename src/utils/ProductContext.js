import { createContext } from "react";


const ProductContext=createContext(
    {
        products:[],
        addProduct:(item)=>{},
        alterQuantity:()=>{}
    }
)

export default ProductContext;


