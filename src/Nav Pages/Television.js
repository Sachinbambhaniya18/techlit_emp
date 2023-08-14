// import { motion } from 'framer-motion';
import React from 'react'

const Television = (props)=> {
  return (
    <div 
    className={`Televisions ${props.isDarkMode ? 'Dark-All' : 'Light-All'}`}
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opacity: 0}}
    // transition={{
    //   duration: '0.5',
    //   ease: "easeInOut"
    // }}
    >Televisions</div>
  )
}

export default Television;