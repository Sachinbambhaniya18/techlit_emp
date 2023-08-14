import React from 'react'
import Card from '../Components/Card';
import { featuredData } from '../data/productData';
// import { motion } from 'framer-motion';

const Home = ({ isDarkMode }) => {

  return (
    <div 
    className={`HomePage ${isDarkMode ? 'Dark-All' : 'Light-All'}`}
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opacity: 0}}
    // transition={{
    //   duration: '0.5',
    //   ease: "easeInOut"
    // }}
    >
      <div className={`Featured ${isDarkMode ? 'Dark-Featured' : 'Light-Featured'}`}>
        <h1 className='Title'>Featured</h1>
        <hr className='Separator' />
        {
            featuredData.map((featured)=>{
              return(
              <Card
              key={featured.id}
              src={featured.src}
              name={featured.name}
              description={featured.description}
              price={featured.price}
              mrp={featured.mrp}
              isDarkMode={isDarkMode} />
              )
            })
        }
      </div>
    </div>
  )
}

export default Home;