import React from 'react'
import {useState} from 'react'
import CartContext from './CartContext'


const CartStore = (props) => {

    const [showDisplay, setshowDisplay] = useState(false)

    const [products, setproducts] = useState([])
    const [total, settotal] = useState(0)

    const addProducts=(item)=>{

        settotal(total+ parseInt(item.price))
        let duplicate=false;

        let updatedProductArray=products.map((val)=>{
            if((val.itemName===item.itemName) && (val.itemDescription===item.itemDescription) && (val.size===item.size)){
                duplicate=true;
                val.count+=1;
                val.totalPrice+=parseInt(item.price);
            }
            return val;
        })

        if(duplicate===false){
            updatedProductArray=[...updatedProductArray,item]
        }

        setproducts(updatedProductArray);

    }

    const toggleDisplay=()=>{
        setshowDisplay(!showDisplay)
    }

    const CartStoreValues={
        items:products,
        addItems:addProducts,
        totalPrice:total,
        showDisplay:showDisplay,
        toggleDisplay:toggleDisplay
      //  alterQuantity:()=>{}
    }

  return (
        <CartContext.Provider value={CartStoreValues}>
            {props.children}
        </CartContext.Provider>
  )
}

export default CartStore
