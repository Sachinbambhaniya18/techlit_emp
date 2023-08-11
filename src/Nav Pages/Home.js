import React from 'react'
import Card from '../Components/Card';
import { featuredData } from '../data/productData';

const Home = ({ isDarkMode }) => {

  return (
    <div className={`HomePage ${isDarkMode ? 'Dark-All' : 'Light-All'}`}>
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