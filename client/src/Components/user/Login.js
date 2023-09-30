import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    const emailRef = useRef()
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    
    const isValid = (e) => {
        const inputVal = e.target.value;
        setEmail(inputVal);
        if (emailRegex.test(email) === false) {
            return setError('Please enter a valid Email or Phone Number');

        } else {
            return setError('')
        }
    }
    useEffect(()=> emailRef.current.focus(), [])
    return (
        <>
            <form action="">
                <div>
                    <label htmlFor="signup-email" className='Alignment'>Enter your Email</label><br />
                    <input type="email" ref={emailRef} id="signup-email" className='Alignment Input-Field' name="email" required onChange={isValid} />
                    <label htmlFor="" className='Error-message Alignment'>{error}</label><br />
                    <label htmlFor="Password" className='Alignment'>Enter your password</label><br />
                    <input type="password" id="Password" className='Alignment Input-Field' name="password" required /><br /><br />
                    <label className="Reset-message">Forgot Password? <Link to="/Login" className='Reset-link'>Click here</Link> to reset it.</label>
                    <div className="Event-button">
                        <input type="submit" value="Login" className='Log-in' />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login