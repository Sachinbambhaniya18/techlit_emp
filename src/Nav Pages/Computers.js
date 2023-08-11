import React from 'react'

const Computers = (props)=> {
  return (
    <div className={`Computers ${props.isDarkMode ? 'Dark-All' : 'Light-All'}`}>Computers</div>
  )
}

export default Computers;