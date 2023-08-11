import React from 'react'

const SignUp = () => {
  
  return (
    <div>
      <form action=''>
        <label htmlFor='SignUp-Mob' className='Alignment'>Enter your Mobile Number</label><br />
        <input type="text" id='SignUp-Mob' className='Input-Field Alignment' required /><br />
        <label htmlFor='otp' className='Otp-label Alignment'>Enter your OTP</label><br />
        <input type="number" id='otp' className='Input-Field Alignment' maxLength={6} required />
        <div className="Otp-button">
          <button className='Otp'>Get OTP</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;