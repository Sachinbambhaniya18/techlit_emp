import React, { useRef, useEffect } from 'react'

const SignUp = () => {
  const nameRef = useRef()
  useEffect(()=> nameRef.current.focus(), [])

  return (
    <div>
      <form action=''>
        <label htmlFor='SignUp-Mob' className='Alignment'>Enter your Full Name</label><br />
        <input type="text" ref={nameRef} id='SignUp-Mob' className='Input-Field Alignment' required/><br />
        <label htmlFor='email' className='Alignment'>Enter your Email</label><br />
        <input type="email" id='email' className='Input-Field Alignment' required />
        <label htmlFor='password' className='Alignment'>Enter your Password</label><br />
        <input type="password" id='password' className='Input-Field Alignment' required />
        <div className="Submit-button">
          <button className='Submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;