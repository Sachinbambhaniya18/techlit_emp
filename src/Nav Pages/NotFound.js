import React,{useEffect} from 'react'

const NotFound = ({title, isDarkMode}) => {
  useEffect(()=>{
    document.title = title;
  }, [title])
  return (
    <div className={`Not-Found ${isDarkMode ? 'Dark-All' : 'Light-All'}`}>
        <p>404 - Not Found</p>
    </div>
  )
}

export default NotFound