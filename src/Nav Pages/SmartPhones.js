// import { motion } from 'framer-motion';
import React,{ useEffect } from 'react'

const SmartPhones = ({isDarkMode, title = "TechLit Emporium"}) => {
  useEffect(()=>{
    document.title = title;
  }, [title])
  return (
    <div
      className={`SmartPhones ${isDarkMode ? 'Dark-All' : 'Light-All'}`}
      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0}}
      // transition={{
      //   duration: '0.5',
      //   ease: "easeInOut"
      // }}
    >SmartPhones</div>
  )
}

export default SmartPhones;