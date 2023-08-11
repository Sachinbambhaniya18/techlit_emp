import React from 'react'

const Electronics = (props) => {
  return (
    <div className={`Electronics ${props.isDarkMode ? 'Dark-All' : 'Light-All'}`}>Electronics</div>
  )
}

export default Electronics;