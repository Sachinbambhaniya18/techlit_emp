import React, { useEffect } from 'react'

const Cart = ({isDarkMode, title}) => {
  
  useEffect(()=>{
    document.title = title;
  }, [title])
  return (
    <div className={`ShoppingCart ${isDarkMode ? 'Dark-All' : 'Light-All'}`}>
      <div className="Item-Holder">
        <img src="/assets/images/cart/Empty_Shopping_Cart.png" alt="product" />
        <h1>Looking for your items?</h1>
        <p>Login or Sign Up to access your cart.</p>
        </div>
    </div>
  )
}

export default Cart;