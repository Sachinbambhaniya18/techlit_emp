import React from 'react'

const FeaturedCard = ({ src, name, price, mrp, classCard, isDarkMode}) => {

  const displayName = name.length > 27 ? `${name.slice(0, 27)}...` : name;
  const num = (number) =>{
    return number.toLocaleString();
  }
  return (
    <div className={`Product-Card ${isDarkMode ? 'Dark-Card' : 'Light-Card'} ${classCard}`}>

        <img src={src} alt="Product" />
        <div className='Displayer'>
        <h1>{displayName}</h1>
        <h3>{num(price)}<span>{num(mrp)}</span></h3>
        <button className={`${isDarkMode ? 'Dark-Btn' : 'Light-Btn'}`}>More Info</button>
        </div>
    </div>
  )
}

export default FeaturedCard;