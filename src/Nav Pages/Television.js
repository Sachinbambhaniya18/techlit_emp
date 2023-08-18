// import { motion } from 'framer-motion';
import React, { useEffect } from 'react'

const Television = ({isDarkMode, title = "TechLit Emporium"}) => {
  useEffect(()=>{
    document.title = title;
  }, [title])
  return (
    <div
      className={`Televisions ${isDarkMode ? 'Dark-All' : 'Light-All'}`}
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