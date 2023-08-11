import React, {useState} from 'react'

const Card = ({ src, name, description, price, mrp, isDarkMode}) => {
  const [isAdded, setIsAdded] = useState('Add to Cart');
  const handleProduct = () =>{
    if(isAdded === 'Add to Cart'){
       setIsAdded('Remove');
    }else{
       setIsAdded('Add to Cart');
    }
  }
  const displayName = name.length > 20 ? `${name.slice(0, 20)}...` : name;
  const num = (number) =>{
    return number.toLocaleString();
  }
  return (
    <div className={`Product-Card ${isDarkMode ? 'Dark-Card' : 'Light-Card'}`}>
        <img src={src} alt="Product" />
        <h1>{displayName}</h1>
        <p>{description}</p>
        <h3>{num(price)}<span>{num(mrp)}</span></h3>
        <hr />
        <button onClick={handleProduct}>{isAdded}</button>
    </div>
  )
}

export default Card;