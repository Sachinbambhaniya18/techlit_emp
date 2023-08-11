import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRegex = /^([^\s@]+@[^\s@]+\.[^\s@]+|\d{9})$/;

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    
    const isValid = (e) => {
        setEmail(e.target.value);
        if (emailRegex.test(email) === false) {
            setError('Please enter a valid Email or Phone Number');

        } else {
            setError('');
            return true;
        }
    }
    return (
        <>
            <form action="" >
                <div>
                    <label htmlFor="Userid" className='Alignment'>Email or Mobile Number</label><br />
                    <input type="text" id="Userid" className='Alignment Input-Field' required onChange={isValid} />
                    <label htmlFor="" className='Error-message Alignment'>{error}</label><br />
                    <label htmlFor="Password" className='Alignment'>Enter your password</label><br />
                    <input type="password" id="Password" className='Alignment Input-Field' required /><br /><br />
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