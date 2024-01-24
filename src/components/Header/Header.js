import React, { useContext } from 'react'
import CartContext from '../../utils/CartContext'
import './Header.css'
const Header = () => {
    const cartContext=useContext(CartContext);
    
    const onClickCartHandler=(e)=>{
        e.preventDefault();
        cartContext.toggleDisplay();
    }

  return (
    <div className='header'>
      <button className="button" onClick={onClickCartHandler}>Cart</button>
    </div>
  )
}

export default Header
