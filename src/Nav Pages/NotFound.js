import React,{useEffect} from 'react'

const NotFound = ({title}) => {
  useEffect(()=>{
    document.title = title;
  }, [title])
  return (
    <div>
        <h1>Not Found</h1>
    </div>
  )
}

export default NotFound