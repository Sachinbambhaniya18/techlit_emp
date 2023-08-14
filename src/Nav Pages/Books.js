// import { motion } from 'framer-motion';
import React from 'react'

const Books = (props) => {
  return (
    <div className={`Books ${props.isDarkMode ? 'Dark-All' : 'Light-All'}`}
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opacity: 0}}
    // transition={{
    //   duration: '0.5',
    //   ease: "easeInOut"
    // }}
    >
      Books
    </div>
  )
}

export default Books;