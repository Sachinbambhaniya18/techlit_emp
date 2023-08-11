import React from 'react'
import { Link } from 'react-router-dom'
const Cart = (props) => {
  return (
    <div className={`ShoppingCart ${props.isDarkMode ? 'Dark-All' : 'Light-All'}`}>
      <div className="Item-Holder">
        <img src="/assets/images/cart/Empty_Shopping_Cart.png" alt="product" />
        <h1>Looking for your items?</h1>
        <p>Login or Sign Up to access your cart.</p>
        <Link to="/LoginPanel"><button className='Glow-up'>Login</button></Link>
        </div>
    </div>
  )
}

export default Cart;