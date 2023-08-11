import React from 'react'

const Books = (props) => {
  return (
    <div className={`Books ${props.isDarkMode ? 'Dark-All' : 'Light-All'}`}>Books</div>
  )
}

export default Books;