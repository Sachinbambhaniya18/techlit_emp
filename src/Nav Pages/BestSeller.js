import React from 'react'

const BestSeller = (props)=> {
  return (
    <div className={`BestSeller ${props.isDarkMode ? 'Dark-All' : 'Light-All'}`}>
      Best Seller
    </div>
  )
}

export default BestSeller;