import React, { useEffect } from 'react'
import FeaturedCard from '../Components/FeaturedCard';
import { featuredData } from '../data/productData';
// import { motion } from 'framer-motion';

const cardClass = ["Card1","Card2","Card3","Card4","Card5"]
const Home = ({ isDarkMode, title = "TechLit Emporium" }) => {
  

  useEffect(()=>{
    document.title = title;
  }, [title])


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
      <fieldset className={`${isDarkMode ? 'Dark-Field' : 'Light-Field'}`}>
        <legend>
          <h1 className={`Title ${isDarkMode ? 'Dark-Title' : 'Light-Title'}`}>Featured</h1>
        </legend>
      <div className={`Featured ${isDarkMode ? 'Dark-Featured' : 'Light-Featured'}`}>
        {/* <hr className='Separator' /> */}
        {   
            featuredData.map((featured, index)=>{
              return(
              <FeaturedCard
              key={featured.id}
              src={featured.src}
              name={featured.name}
              description={featured.description}
              price={featured.price}
              mrp={featured.mrp}
              classCard={cardClass[index]}
              isDarkMode={isDarkMode} />
              )
            })
        }
      </div>
      </fieldset>
    </div>
  )
}

export default Home;