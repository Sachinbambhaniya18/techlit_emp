import React from 'react'

const SmartPhones = (props)=> {
  return (
    <div className={`SmartPhones ${props.isDarkMode ? 'Dark-All' : 'Light-All'}`}>SmartPhones</div>
  )
}

export default SmartPhones;