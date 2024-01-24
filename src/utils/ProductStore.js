import React from 'react'
import {useState} from 'react'
import ProductContext from './ProductContext'


const ProductStore = (props) => {

    const [products, setproducts] = useState([])

    const addProducts=(item)=>{

        setproducts((products)=>{
            return [...products,item]
        })
    }

    const changecount=(item,size)=>{
      const filterProductArray=products.map((val)=>{
        if(item.Tshirt===val.Tshirt && item.tshirtDescription===val.tshirtDescription){
          if(size==="large"){
            val.largeQuantity-=1;
          }else if(size==="medium")
          {
            val.mediumQuantity-=1;
          }
         else{
          val.smallQuantity-=1;
         }
        }
        return val;
      })

      setproducts(filterProductArray);
    }

    const ProductStoreValues={
        products:products,
        addProduct:addProducts,
         alterQuantity:changecount
    }

  return (
        <ProductContext.Provider value={ProductStoreValues}>
            {props.children}
        </ProductContext.Provider>
  )
}

export default ProductStore
