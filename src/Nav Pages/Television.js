import React from 'react'

const Television = (props)=> {
  return (
    <div className={`Televisions ${props.isDarkMode ? 'Dark-All' : 'Light-All'}`}>Televisions</div>
  )
}

export default Television;